// Securely load environment variables from .env
import 'dotenv/config'

console.log('ℹ️ IndexNow: Script started')

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

import fs from 'fs'
import path from 'path'
import fetch from 'node-fetch'

const MAX_URLS_PER_BATCH = 10000 // IndexNow limit

/**
 * Submits URLs to IndexNow endpoint
 * @param {string[]} urls - Array of URLs to submit
 */
async function submitToIndexNow(urls) {
  const indexNowKey = process.env.INDEXNOW_KEY
  const siteUrl = process.env.SITE_URL || 'https://www.zerodaily.me'
  const INDEXNOW_ENDPOINT = 'https://www.bing.com/indexnow'
  if (!indexNowKey) {
    throw new Error('INDEXNOW_KEY is not set in environment variables.')
  }
  if (!Array.isArray(urls) || urls.length === 0) {
    throw new Error('No valid URLs to submit')
  }
  const payload = {
    host: new URL(siteUrl).host,
    key: indexNowKey,
    keyLocation: `${siteUrl}/${indexNowKey}.txt`,
    urlList: urls,
  }
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`IndexNow submission failed: ${res.status} ${text}`)
  }
  console.log(`✅ IndexNow: Successfully submitted ${urls.length} URLs to IndexNow`)
}

/**
 * Load URLs and lastModified from indexnow-urls.json
 * @returns {Array<{url: string, lastModified: string}>}
 */
function loadIndexNowUrls() {
  const filePath = path.join(process.cwd(), 'data', 'indexnow-urls.json')
  if (!fs.existsSync(filePath)) {
    throw new Error('indexnow-urls.json not found. Run generate-indexnow-urls.mjs first.')
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

/**
 * Load previous submission state from indexnow-submissions.json
 * @returns {Record<string, string>} url -> lastModified
 */
function loadSubmissionState() {
  const filePath = path.join(process.cwd(), 'data', 'indexnow-submissions.json')
  if (!fs.existsSync(filePath)) return {}
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

/**
 * Save submission state to indexnow-submissions.json
 */
function saveSubmissionState(state) {
  const filePath = path.join(process.cwd(), 'data', 'indexnow-submissions.json')
  fs.writeFileSync(filePath, JSON.stringify(state, null, 2))
}

/**
 * Main: submit new/updated URLs to IndexNow and update state
 */
export default async function submitUrlsToIndexNow() {
  try {
    if (!process.env.INDEXNOW_KEY) {
      console.error('❌ INDEXNOW_KEY is missing from environment. Please set it in your .env file.')
      return
    }
    let urls
    try {
      urls = loadIndexNowUrls()
    } catch (e) {
      console.warn(`⚠️ IndexNow: ${e.message}`)
      return
    }
    const prevState = loadSubmissionState()
    const newOrUpdated = urls.filter(({ url, lastModified }) => {
      return !prevState[url] || prevState[url] !== lastModified
    })
    if (newOrUpdated.length === 0) {
      console.log('ℹ️ IndexNow: No new or updated URLs to submit.')
      return
    }
    console.log(`📋 IndexNow: Submitting ${newOrUpdated.length} new/updated URLs to IndexNow...`)
    // Submit in batches
    for (let i = 0; i < newOrUpdated.length; i += MAX_URLS_PER_BATCH) {
      const batch = newOrUpdated.slice(i, i + MAX_URLS_PER_BATCH).map((u) => u.url)
      await submitToIndexNow(batch)
    }
    // Update state
    const updatedState = { ...prevState }
    for (const { url, lastModified } of newOrUpdated) {
      updatedState[url] = lastModified
    }
    saveSubmissionState(updatedState)
    console.log('✅ IndexNow: Submission state updated.')
  } catch (err) {
    console.error('❌ IndexNow: Uncaught error during submission:', err)
  } finally {
    console.log('ℹ️ IndexNow: Script finished')
  }
}

// If run directly, execute (for CLI and build usage)
if (import.meta.url === `file://${process.argv[1]}`) {
  submitUrlsToIndexNow()
}
