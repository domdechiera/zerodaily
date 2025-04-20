// data/trendingNews.ts
// Static list of trending news for sidebar usage

export interface TrendingNewsItem {
  title: string
  href: string
  date: string
}

export const trendingNews: TrendingNewsItem[] = [
  {
    title:
      'Windows NTLM Hash Leak CVE-2025-24054 Under Active Exploitation: Patch Now to Prevent Credential Theft',
    href: '/blog/2025-04-18-windows-ntlm-cve-2025-24054-under-active-exploitation',
    date: '2025-04-18',
  },
  {
    title: 'SentinelOne Fallout: Industry Response and Long-Term Risks',
    href: '/blog/2025-04-17-sentinelone-fallout',
    date: '2025-04-17',
  },
  {
    title:
      'Apple Patches Two Actively Exploited Zero-Days (CVE-2025-31200, CVE-2025-31201) – April 2025 Emergency Security Update',
    href: '/blog/2025-04-16-apple-zero-day-emergency-patch',
    date: '2025-04-16',
  },
  {
    title: '4chan Hacked: Major Data Breach Exposes Internal Data and Source Code',
    href: '/blog/2025-04-16-4chan-hack',
    date: '2025-04-16',
  },
]
