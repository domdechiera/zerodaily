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
      'ConnectWise Releases ScreenConnect 25.2.4 Security Patch for Critical ViewState Vulnerability (2025-04-25)',
    href: 'https://www.zerodaily.me/blog/2025-04-25-connectwise-screenconnect-25-2-4-security-patch',
    date: '2025-04-25',
  },
  {
    title:
      'No Evidence of New TikTok Hack: R00TK1T ISC CYBER TEAM’s 972,000 Password Leak Debunked',
    href: 'https://www.zerodaily.me/blog/2025-04-24-no-evidence-tiktok-hack-r00tk1t-password-leak-debunked',
    date: '2025-04-24',
  },
  {
    title:
      'Critical CrushFTP Authentication Bypass Vulnerability CVE-2025-31161: What You Need to Know',
    href: '/blog/2025-04-13-crushftp-vulnerability',
    date: '2025-04-13',
  },
  {
    title:
      'Microsoft Defender XDR False Positive Exposes 1,700+ Sensitive Documents in Public Data Leak',
    href: 'https://www.zerodaily.me/blog/2025-04-26-microsoft-defender-xdr-false-positive-sensitive-documents-leak',
    date: '2025-04-26',
  },
]
