import { SVGProps, CSSProperties } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { Facebook, Linkedin, Bluesky, X, Mastodon } from '@/components/social-icons/icons'

const Header = () => {
  const topHeaderClass =
    'w-full bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-900 py-1 px-4 text-sm'
  let mainHeaderClass =
    'w-full bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-900'
  if (siteMetadata.stickyNav) {
    mainHeaderClass += ' sticky top-0 z-50'
  }

  // Custom HeaderSocialIcon component with muted colors
  const HeaderSocialIcon = ({
    href,
    icon,
    rel = 'noopener noreferrer',
    style,
  }: {
    href: string | undefined
    icon: (svgProps: SVGProps<SVGSVGElement>) => JSX.Element
    rel?: string
    style?: CSSProperties
  }) => {
    if (!href) return null
    const Icon = icon
    return (
      <a className="text-xs transition" target="_blank" rel={rel} href={href} style={style}>
        <Icon className="h-3 w-3 fill-current text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400" />
      </a>
    )
  }

  // Using headerNavLinks imported from data files to maintain compatibility with starter template

  return (
    <>
      {/* Subtle notification ribbon */}
      <div className={topHeaderClass}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xs text-gray-400 md:text-sm dark:text-gray-500">
            Cybersecurity news without the noise
          </div>
          <div className="hidden space-x-5 md:flex">
            <HeaderSocialIcon href={siteMetadata.linkedin} icon={Linkedin} />
            <HeaderSocialIcon href={siteMetadata.x} icon={X} />
            <HeaderSocialIcon href={siteMetadata.bluesky} icon={Bluesky} />
            <HeaderSocialIcon
              href={siteMetadata.mastodon}
              icon={Mastodon}
              rel="me noopener noreferrer"
            />
            <HeaderSocialIcon
              href={siteMetadata.mastodon2}
              icon={Mastodon}
              rel="me noopener noreferrer"
              style={{ display: 'none' }}
            />
          </div>
        </div>
      </div>

      {/* Main header with logo and navigation */}
      <header className={mainHeaderClass}>
        <div className="container mx-auto px-4 py-2 md:py-4">
          {/* Logo and site title */}
          <div className="mb-2 flex items-center justify-between md:mb-6">
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center">
                <div className="text-primary-500 dark:text-primary-400 text-3xl font-bold md:text-4xl lg:text-5xl">
                  {siteMetadata.headerTitle}
                </div>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="#newsletter"
                className="border-primary-500 text-primary-500 hover:bg-primary-50 hidden items-center rounded-md border px-4 py-1.5 text-sm font-medium md:flex dark:hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Subscribe — Get Latest News
              </Link>
              <div className="flex items-center space-x-4 md:hidden">
                <ThemeSwitch />
                <SearchButton />
              </div>
              <MobileNav />
            </div>
          </div>

          {/* Navigation row - fixed border width */}
          <nav className="hidden border-t border-gray-100 pt-4 md:block dark:border-gray-900">
            <div className="mb-3 flex flex-wrap justify-center space-x-3 text-sm md:mb-5 md:space-x-8 md:text-base dark:border-gray-700">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="hover:text-primary-500 dark:hover:text-primary-400 my-1 font-medium text-gray-900 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <ThemeSwitch />
              <SearchButton />
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
