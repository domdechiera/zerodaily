/**
 * IndexNow Submission Script
 *
 * Automatically submits all public URLs to Bing via IndexNow protocol
 * Runs as part of the build process on both local environments and Vercel
 *
 * Security features:
 * - Uses environment variables for configuration
 * - Validates URLs before submission
 * - Provides detailed logging
 * - Handles errors gracefully
 */

// Define disallowed paths directly to avoid TypeScript import issues
const robotsDisallow = ['/tags/', '/static/', '/scripts/', '/projects/']
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Dynamic import for utils/indexnow module
async function importIndexNow() {
  try {
    const require = createRequire(import.meta.url)
    const indexNowPath = '../utils/indexnow.js'
    return import(indexNowPath)
  } catch (error) {
    console.error('❌ Failed to import IndexNow utility:', error)
    throw error
  }
}

const MAX_URLS_PER_BATCH = 10000 // IndexNow limit

/**
 * Check if a URL should be excluded based on robots.txt disallow rules
 * @param {string} url URL to check
 * @returns {boolean} True if the URL should be excluded
 */
function shouldExcludeUrl(url) {
  const urlPath = new URL(url).pathname
  // Check if the URL matches any disallowed paths
  return robotsDisallow.some((disallowPattern) => {
    // If it's a directory pattern ending with '/', check if the URL starts with this path
    if (disallowPattern.endsWith('/')) {
      return urlPath.startsWith(disallowPattern)
    }
    // Otherwise, exact match
    return urlPath === disallowPattern
  })
}

/**
 * Collect all public URLs from the site
 * @returns {Promise<string[]>} Array of absolute URLs that aren't in the robots disallow list
 */
async function collectUrls() {
  const urls = []
  const siteUrl = 'https://www.zerodaily.me' // Read from environment or config if needed

  // Try multiple locations for sitemap.xml
  const possibleSitemapPaths = [
    path.join(process.cwd(), 'public', 'sitemap.xml'),
    path.join(process.cwd(), '..', 'public', 'sitemap.xml'),
    path.join(process.cwd(), '..', '.next', 'server', 'app', 'sitemap.xml', 'index.body'),
    path.join(process.cwd(), '.next', 'server', 'app', 'sitemap.xml', 'index.body'),
  ]

  // Try to find and read the sitemap
  let sitemap = null
  let foundPath = null

  for (const sitemapPath of possibleSitemapPaths) {
    if (fs.existsSync(sitemapPath)) {
      try {
        sitemap = fs.readFileSync(sitemapPath, 'utf-8')
        foundPath = sitemapPath
        console.log(`🌐 IndexNow: Found sitemap at ${sitemapPath}`)
        break
      } catch (e) {
        console.log(`⚠️ IndexNow: Could not read ${sitemapPath}: ${e.message}`)
      }
    }
  }

  // If we found a sitemap, extract URLs
  if (sitemap) {
    console.log('🌐 IndexNow: Reading URLs from sitemap...')
    const sitemapUrls =
      sitemap.match(/<loc>(.*?)<\/loc>/g)?.map((loc) => loc.replace(/<\/?loc>/g, '')) || []

    // Only include URLs that aren't in the robots disallow list
    sitemapUrls.filter((url) => !shouldExcludeUrl(url)).forEach((url) => urls.push(url))

    console.log(
      `📊 IndexNow: Found ${sitemapUrls.length} total URLs, ${urls.length} allowed for submission`
    )
  } else {
    // Fallback: Add core URLs manually
    console.log('⚠️ IndexNow: No sitemap found. Using fallback URL list.')

    // Add homepage and core sections
    urls.push(siteUrl)
    urls.push(`${siteUrl}/blog`)
    urls.push(`${siteUrl}/resources`)
    urls.push(`${siteUrl}/about`)

    console.log(`📊 IndexNow: Using ${urls.length} fallback URLs`)
  }

  return [...new Set(urls)] // Remove duplicates
}

/**
 * Submit all URLs to IndexNow
 */
export async function submitUrlsToIndexNow() {
  try {
    console.log('🔍 IndexNow: Collecting URLs...')
    const urls = await collectUrls()

    if (!urls.length) {
      console.warn('⚠️ IndexNow: No URLs found to submit')
      return
    }

    console.log(
      `📋 IndexNow: Found ${urls.length} URLs to submit (after filtering disallowed paths)`
    )

    // Check if IndexNow key is configured
    const indexNowKey = process.env.INDEXNOW_KEY
    if (!indexNowKey) {
      console.error(
        '❌ IndexNow: Missing INDEXNOW_KEY environment variable. URLs will not be submitted.'
      )
      return
    }

    // Check if verification file exists
    const verificationFile = path.join(process.cwd(), 'public', `${indexNowKey}.txt`)
    if (!fs.existsSync(verificationFile)) {
      console.error(
        `❌ IndexNow: Verification file not found at public/${indexNowKey}.txt. URLs will not be submitted.`
      )
      return
    }

    // Import the indexnow utility
    const { submitToIndexNow, submitUrlToIndexNow } = await importIndexNow()

    // Process URLs in batches
    if (urls.length === 1) {
      // Single URL submission
      console.log(`🌐 IndexNow: Submitting URL: ${urls[0]}`)
      await submitUrlToIndexNow(urls[0])
      console.log('✅ IndexNow: URL successfully submitted')
    } else {
      // Process in batches to respect IndexNow limits
      for (let i = 0; i < urls.length; i += MAX_URLS_PER_BATCH) {
        const batch = urls.slice(i, i + MAX_URLS_PER_BATCH)
        console.log(`🌐 IndexNow: Submitting batch of ${batch.length} URLs...`)
        await submitToIndexNow(batch)
        console.log(
          `✅ IndexNow: Successfully submitted batch ${Math.floor(i / MAX_URLS_PER_BATCH) + 1}`
        )
      }
    }

    console.log(
      `✅ IndexNow: Successfully submitted ${urls.length} URLs to IndexNow (excluding robots.txt disallowed paths)`
    )
  } catch (error) {
    console.error('❌ IndexNow submission error:', error)
    // Don't fail the build for IndexNow errors
  }
}

// Allow use as ESM module
export default submitUrlsToIndexNow
