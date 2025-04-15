interface Resource {
  title: string
  description: string
  link: string
  slug: string
}

export const resourcesData: Resource[] = [
  {
    title: 'Security Awareness Training',
    description:
      'Free resources to help organizations train employees on cybersecurity best practices.',
    link: '/resources/security-awareness-training',
    slug: 'security-awareness-training',
  },
  {
    title: 'Vulnerability Management',
    description: 'Tools and guides for tracking and managing security vulnerabilities.',
    link: '/resources/vulnerability-management',
    slug: 'vulnerability-management',
  },
  {
    title: 'Penetration Testing Guides',
    description: 'Step-by-step guides for ethical hacking and penetration testing.',
    link: '/resources/penetration-testing-guides',
    slug: 'penetration-testing-guides',
  },
  {
    title: 'Incident Response Playbooks',
    description: 'Templates and workflows for responding to security incidents.',
    link: '/resources/incident-response-playbooks',
    slug: 'incident-response-playbooks',
  },
  {
    title: 'Security Hardening Checklists',
    description: 'Best practices for securing different systems and applications.',
    link: '/resources/security-hardening-checklists',
    slug: 'security-hardening-checklists',
  },
  {
    title: 'Compliance Frameworks',
    description: 'Information about major security compliance frameworks and requirements.',
    link: '/resources/compliance-frameworks',
    slug: 'compliance-frameworks',
  },
]

export default resourcesData
