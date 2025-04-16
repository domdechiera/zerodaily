/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'ZeroDaily - Cybersecurity News',
  author: 'Dom De Chiera',
  headerTitle: 'ZeroDaily',
  description: 'Cybersecurity news, expert analysis, and zero-day threat updates—without the noise',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.zerodaily.me',
  siteRepo: 'https://github.com/zerodailyme/zerodaily.me',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/social-banner.png`,
  mastodon: 'https://mastodon.social/@zerodailyme',
  email: 'contact@zerodaily.me',
  github: 'https://github.com/zerodailyme',
  x: 'https://x.com/zerodailyme',
  facebook: 'https://facebook.com/zerodailyme',
  youtube: 'https://youtube.com/@zerodailyme',
  linkedin: 'https://www.linkedin.com/company/zerodailyme',
  threads: 'https://www.threads.net/@zerodailyme',
  instagram: 'https://www.instagram.com/zerodailyme',
  medium: 'https://medium.com/@zerodailyme',
  bluesky: 'https://bsky.app/profile/zerodaily.me',
  locale: 'en-US',
  stickyNav: true,
  analytics: {
    vercelAnalytics: true,
  },
  newsletter: {
    provider: 'beehiiv',
    publicationId: process.env.BEEHIIV_PUBLICATION_ID,
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
