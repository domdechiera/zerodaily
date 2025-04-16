interface Tool {
  title: string
  description: string
  link: string
  category: string
  rating: number
  price: string
  isEditorsChoice?: boolean
}

export const categories = [
  'All',
  'Password Management',
  'Network Security',
  'Antivirus',
  'Cloud Storage',
]

export const toolsData: Tool[] = [
  {
    title: 'Proton VPN',
    description: 'Open-source secure VPN service with advanced encryption and no-logs policy.',
    link: 'https://protonvpn.com',
    category: 'Network Security',
    rating: 4.6,
    price: 'Free, Plus from $9.99/month',
    isEditorsChoice: true,
  },
  {
    title: 'Proton Pass',
    description:
      'Open-source password manager with end-to-end encryption and hide-my-email aliases.',
    link: 'https://proton.me/pass/',
    category: 'Password Management',
    rating: 4.8,
    price: 'Free, Plus from $2.99/month',
    isEditorsChoice: true,
  },
  {
    title: 'Proton Drive',
    description:
      'Open-source end-to-end encrypted cloud storage, no one but you and the people you choose can access your files.',
    link: 'https://proton.me/drive',
    category: 'Cloud Storage',
    rating: 4.6,
    price: 'Free, Plus from $3.99/month',
    isEditorsChoice: true,
  },
  {
    title: 'NordVPN',
    description: 'Secure VPN service with advanced encryption and no-logs policy.',
    link: 'https://nordvpn.com',
    category: 'Network Security',
    rating: 4.8,
    price: 'From $3.99/month',
  },
  {
    title: 'Bitwarden',
    description: 'Open-source password manager with secure vault and sharing features.',
    link: 'https://bitwarden.com',
    category: 'Password Management',
    rating: 4.7,
    price: 'Free, Premium from $10/year',
  },
  {
    title: 'Malwarebytes',
    description: 'Advanced antivirus and malware protection for all devices.',
    link: 'https://malwarebytes.com',
    category: 'Antivirus',
    rating: 4.6,
    price: 'From $39.99/year',
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
]

export default toolsData
