// data/popularResources.ts
// Static list of popular resources for sidebar usage

export interface PopularResource {
  title: string
  href: string
  category: string
  date: string
}

export const popularResources: PopularResource[] = [
  {
    title: 'Social Engineering Defense: Protecting Your Organization',
    href: '/resources/security-awareness-training/social-engineering-defense',
    category: 'Security Awareness Training',
    date: '',
  },
  {
    title: 'Vulnerability Prioritization Framework',
    href: '/resources/vulnerability-management/vulnerability-prioritization-framework',
    category: 'Vulnerability Management',
    date: '',
  },
  {
    title: 'Web Application Penetration Testing Methodology',
    href: '/resources/penetration-testing-guides/web-application-pentest-methodology',
    category: 'Penetration Testing Guides',
    date: '',
  },
  {
    title: 'Ransomware Incident Response Playbook',
    href: '/resources/incident-response-playbooks/ransomware-response-playbook',
    category: 'Incident Response Playbooks',
    date: '',
  },
]
