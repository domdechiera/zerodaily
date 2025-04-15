interface Tool {
  title: string
  description: string
  link: string
  category: string
  rating: number
  price: string
  isEditorsChoice?: boolean
}

export const categories = ['All', 'Password Management', 'Network Security', 'Antivirus']

export const toolsData: Tool[] = [
  {
    title: 'NordVPN',
    description: 'Secure VPN service with advanced encryption and no-logs policy.',
    link: 'https://nordvpn.com',
    category: 'Network Security',
    rating: 4.8,
    price: 'From $3.99/month',
    isEditorsChoice: true,
  },
  {
    title: 'Bitwarden',
    description: 'Open-source password manager with secure vault and sharing features.',
    link: 'https://bitwarden.com',
    category: 'Password Management',
    rating: 4.7,
    price: 'Free, Premium from $10/year',
    isEditorsChoice: true,
  },
  {
    title: 'Malwarebytes',
    description: 'Advanced antivirus and malware protection for all devices.',
    link: 'https://malwarebytes.com',
    category: 'Antivirus',
    rating: 4.6,
    price: 'From $39.99/year',
    isEditorsChoice: true,
  },
  {
    title: '1Password',
    description: 'Enterprise-grade password manager with advanced security features.',
    link: 'https://1password.com',
    category: 'Password Management',
    rating: 4.9,
    price: 'From $2.99/month',
  },
  {
    title: 'ExpressVPN',
    description: 'High-speed VPN with strong privacy protection and global server network.',
    link: 'https://expressvpn.com',
    category: 'Network Security',
    rating: 4.7,
    price: 'From $6.67/month',
  },
  {
    title: 'Kaspersky',
    description: 'Comprehensive antivirus solution with advanced threat detection.',
    link: 'https://kaspersky.com',
    category: 'Antivirus',
    rating: 4.5,
    price: 'From $29.99/year',
  },
]

export default toolsData
