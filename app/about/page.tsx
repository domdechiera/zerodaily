import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'
import Image from '@/components/Image'

export const metadata = genPageMetadata({ title: 'About ZeroDaily' })

export default function Page() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          About
        </h1>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8 xl:items-start">
          <Image
            src="/static/favicons/favicon.svg"
            alt="ZeroDaily Logo"
            width={192}
            height={192}
            className="h-48 w-48"
          />
          <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            ZeroDaily
          </h3>
          <div className="text-gray-500 dark:text-gray-400">Cybersecurity News & Insights</div>
        </div>
        <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2">
          <p className="text-gray-900 dark:text-gray-200">
            <strong>ZeroDaily</strong> is a cybersecurity news platform dedicated to delivering
            timely security news, insights, and resources. Our mission is to keep security
            professionals, business leaders, and technology enthusiasts informed about the latest
            vulnerabilities, threats, and best practices in the cybersecurity industry.
          </p>
          <h2 className="text-gray-900 dark:text-white">Our Mission</h2>
          <p className="text-gray-900 dark:text-gray-200">
            In an increasingly complex digital threat landscape, staying informed is the first line
            of defense. ZeroDaily aims to bridge the gap between technical security details and
            practical understanding by:
          </p>
          <ul className="dark:text-gray-200">
            <li>Providing clear, actionable insights on emerging threats</li>
            <li>Explaining complex vulnerabilities in accessible language</li>
            <li>Sharing best practices that organizations can implement</li>
            <li>Curating high-quality resources for security professionals</li>
          </ul>
          <h2 className="text-gray-900 dark:text-white">What We Cover</h2>
          <p className="text-gray-900 dark:text-gray-200">
            Our coverage spans the cybersecurity spectrum, with particular focus on:
          </p>
          <ul className="dark:text-gray-200">
            <li>
              <Link href="/tags/threat-intelligence" className="dark:text-primary-400">
                Threat Intelligence
              </Link>{' '}
              - Analysis of emerging threat actors and their tactics
            </li>
            <li>
              <Link href="/tags/vulnerabilities" className="dark:text-primary-400">
                Vulnerabilities
              </Link>{' '}
              - Breakdowns of critical security flaws and mitigation strategies
            </li>
            <li>
              <Link href="/tags/ransomware" className="dark:text-primary-400">
                Ransomware
              </Link>{' '}
              - Updates on ransomware trends, prevention, and recovery
            </li>
            <li>
              <Link href="/tags/cloud-security" className="dark:text-primary-400">
                Cloud Security
              </Link>{' '}
              - Best practices for securing cloud environments
            </li>
            <li>
              <Link href="/tags/data-breaches" className="dark:text-primary-400">
                Data Protection
              </Link>{' '}
              - Strategies for safeguarding sensitive information
            </li>
            <li>
              <Link href="/tags/compliance" className="dark:text-primary-400">
                Compliance & Regulation
              </Link>{' '}
              - Navigating the complex landscape of security requirements
            </li>
          </ul>
          <h2 className="text-gray-900 dark:text-white">Our Approach</h2>
          <p className="text-gray-900 dark:text-gray-200">
            ZeroDaily combines technical depth with clear communication. We strive to:
          </p>
          <ul className="dark:text-gray-200">
            <li>
              <strong className="dark:text-white">Simplify without oversimplifying</strong> - Making
              complex topics accessible without losing important nuance
            </li>
            <li>
              <strong className="dark:text-white">Prioritize accuracy</strong> - Ensuring our
              reporting and analysis are technically sound
            </li>
            <li>
              <strong className="dark:text-white">Provide context</strong> - Helping readers
              understand the "why" behind security developments
            </li>
            <li>
              <strong className="dark:text-white">Offer practical takeaways</strong> - Focusing on
              actionable insights readers can apply
            </li>
          </ul>
          <h2 className="text-gray-900 dark:text-white">Connect With Us</h2>
          <p className="text-gray-900 dark:text-gray-200">
            We welcome feedback, suggestions, and cybersecurity news tips. Connect with us through
            our social channels or{' '}
            <Link href="mailto:contact@zerodaily.me" className="dark:text-primary-400">
              contact@zerodaily.me
            </Link>
            .
          </p>
          <p className="text-gray-900 dark:text-gray-200">
            Thank you for making ZeroDaily part of your security awareness strategy.
          </p>
        </div>
      </div>
    </div>
  )
}
