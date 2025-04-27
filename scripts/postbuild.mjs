import rss from './rss.mjs'
import submitUrlsToIndexNow from './indexnow.mjs'

async function postbuild() {
  // 1. Generate RSS feed
  console.log('📄 Generating RSS feed...')
  await rss()
  console.log('✅ RSS feed generated...')

  // 2. Submit URLs to IndexNow (after RSS and after sitemap should exist)
  try {
    console.log('🔎 Running IndexNow submission...')
    await submitUrlsToIndexNow()
  } catch (error) {
    console.error('❌ IndexNow submission failed:', error)
    // Don't fail the build process for IndexNow errors
  }
}

postbuild().catch((error) => {
  console.error('Postbuild process failed:', error)
  process.exit(1)
})
