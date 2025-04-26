import rss from './rss.mjs'
import { createRequire } from 'module'

// Dynamic import for TypeScript modules
async function importIndexNow() {
  try {
    const require = createRequire(import.meta.url)
    const indexNowPath = require.resolve('./indexnow.mjs')
    return (await import(indexNowPath)).default
  } catch (error) {
    console.warn(
      '⚠️ IndexNow module not found or not compiled, skipping submission:',
      error.message
    )
    return null
  }
}

async function postbuild() {
  // Generate RSS feed
  console.log('📄 Generating RSS feed...')
  await rss()
  console.log('✅ RSS feed generated...')

  // Submit URLs to IndexNow
  try {
    console.log('🔎 Running IndexNow submission...')
    const submitUrlsToIndexNow = await importIndexNow()
    if (submitUrlsToIndexNow) {
      await submitUrlsToIndexNow()
    }
  } catch (error) {
    console.error('❌ IndexNow submission failed:', error)
    // Don't fail the build process for IndexNow errors
  }
}

postbuild().catch((error) => {
  console.error('Postbuild process failed:', error)
  process.exit(1)
})
