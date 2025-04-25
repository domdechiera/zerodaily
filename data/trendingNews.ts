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
      'Critical CrushFTP Authentication Bypass Vulnerability CVE-2025-31161: What You Need to Know',
    href: '/blog/2025-04-13-crushftp-vulnerability',
    date: '2025-04-13',
  },
  {
    title:
      'Proton66 Bulletproof Hosting Leveraged in Global Malware & Ransomware Wave (CVE‑2024‑55591, CVE‑2025‑24472)',
    href: 'https://www.zerodaily.me/blog/2025-04-21-cybercriminals-exploit-proton66-bulletproof-hosting',
    date: '2025-04-21',
  },
  {
    title: 'Widespread Microsoft Entra Lockouts Disrupt Organizations Globally – April 2025',
    href: '/blog/2025-04-20-microsoft-entra-mace-lockout',
    date: '2025-04-20',
  },
  {
    title:
      'Windows NTLM Hash Leak CVE-2025-24054 Under Active Exploitation: Patch Now to Prevent Credential Theft',
    href: '/blog/2025-04-18-windows-ntlm-cve-2025-24054-under-active-exploitation',
    date: '2025-04-18',
  },
]
