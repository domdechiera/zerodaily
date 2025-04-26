import IndexNowClient from 'indexnow'
import siteMetadata from '@/data/siteMetadata'

// Environment variables validation
const indexNowKey = process.env.INDEXNOW_KEY
if (!indexNowKey) {
  console.warn('INDEXNOW_KEY is not set in environment variables. IndexNow submissions will be disabled.')
}

const siteUrl = siteMetadata.siteUrl

/**
 * Initialize IndexNow client for secure, authenticated URL submissions to search engines
 * 
 * This implementation follows security best practices:
 * - Keys stored in environment variables, never hardcoded
 * - Key location hosted on domain for verification
 * - Input validation to prevent injection
 * - Type safety with TypeScript
 */
// Use the BING search engine endpoint (default for IndexNow)
const BING_INDEXNOW_URL = 'https://www.bing.com/indexnow'

export const indexNowClient = indexNowKey
  ? new IndexNowClient(
      BING_INDEXNOW_URL,           // engine - The search engine endpoint
      indexNowKey,                // key - The verification key
      `${siteUrl}/${indexNowKey}.txt` // keyLocation - URL to the verification file
    )
  : null

/**
 * Submit URLs to IndexNow
 * 
 * @param urls - Array of URLs to submit (must be from this domain)
 * @returns Promise that resolves when submission is complete
 * @throws Error if submission fails or if IndexNow is not configured
 */
export async function submitToIndexNow(urls: string[]): Promise<void> {
  if (!indexNowClient) {
    throw new Error('IndexNow is not configured. Set INDEXNOW_KEY in environment variables.')
  }

  // Validate URLs
  const validUrls = urls.filter((url) => {
    try {
      const urlObj = new URL(url)
      // Ensure URLs are from this domain
      return urlObj.origin === siteUrl
    } catch {
      console.error(`Invalid URL: ${url}`)
      return false
    }
  })

  if (validUrls.length === 0) {
    throw new Error('No valid URLs to submit')
  }

  // Submit URLs to IndexNow
  if (validUrls.length === 1) {
    // Use submitUrl for a single URL
    return indexNowClient.submitUrl(validUrls[0])
  } else {
    // Use submitUrls for multiple URLs
    // First URL becomes the host (domain)
    const host = new URL(validUrls[0]).origin
    return indexNowClient.submitUrls(host, validUrls)
  }
}

/**
 * Submit a single URL to IndexNow
 * 
 * @param url - URL to submit (must be from this domain)
 * @returns Promise that resolves when submission is complete
 * @throws Error if submission fails or if IndexNow is not configured
 */
export async function submitUrlToIndexNow(url: string): Promise<void> {
  if (!indexNowClient) {
    throw new Error('IndexNow is not configured. Set INDEXNOW_KEY in environment variables.')
  }
  
  // Validate URL
  try {
    const urlObj = new URL(url)
    // Ensure URL is from this domain
    if (urlObj.origin !== siteUrl) {
      throw new Error(`URL is not from this domain: ${url}`)
    }
  } catch (error) {
    throw new Error(`Invalid URL: ${url}`)
  }
  
  // Submit URL to IndexNow
  return indexNowClient.submitUrl(url)
}
