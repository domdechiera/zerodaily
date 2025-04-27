import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'
import { robotsDisallow } from '@/data/robotsDisallow'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  // Generate rules: allow everything, but disallow specific paths
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: robotsDisallow,
      },
    ],
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
  }
}
