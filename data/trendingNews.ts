// data/trendingNews.ts
// Static list of trending news for sidebar usage

export interface TrendingNewsItem {
  title: string
  href: string
  date: string
}

export const trendingNews: TrendingNewsItem[] = [
  {
    title: 'SentinelOne Fallout: Industry Response and Long-Term Risks',
    href: '/blog/2025-04-17-sentinelone-fallout',
    date: '2025-04-17',
  },
  {
    title:
      'XORDDoS Trojan: 2023–2025 Global Linux DDoS Campaigns, Evolving Infrastructure, and U.S. Targeting',
    href: '/blog/2025-04-18-xorddos-linux-ddos-malware-global-campaign',
    date: '2025-04-18',
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
