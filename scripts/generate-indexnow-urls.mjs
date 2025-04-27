// Generate indexnow-urls.json using the same logic as sitemap.ts
import fs from 'fs'
import path from 'path'
import siteMetadata from '../data/siteMetadata.js'
import { allBlogs } from '../.contentlayer/generated/index.mjs'

const siteUrl = siteMetadata.siteUrl

const blogRoutes = allBlogs
  .filter((post) => !post.draft)
  .map((post) => ({
    url: `${siteUrl}/${post.path}`,
    lastModified: post.lastmod || post.date,
  }))

const routes = ['', 'blog', 'resources', 'tags'].map((route) => ({
  url: `${siteUrl}/${route}`,
  lastModified: new Date().toISOString().split('T')[0],
}))

const indexnowUrls = [...routes, ...blogRoutes]

const outputPath = path.join(process.cwd(), 'data', 'indexnow-urls.json')
fs.writeFileSync(outputPath, JSON.stringify(indexnowUrls, null, 2))
console.log(`✅ Generated indexnow-urls.json with ${indexnowUrls.length} URLs`)
