'use client'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterWrapper from '@/components/NewsletterWrapper'
import Sidebar from '@/components/Sidebar'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      {/* Hero section with cybersecurity focus - Full width */}
      <div className="space-y-4 pt-6 pb-8 text-center md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Cybersecurity News & Insights
        </h1>
        <p className="mx-auto max-w-3xl text-lg leading-7 text-gray-500 dark:text-gray-400">
          {siteMetadata.description}
        </p>
        <div className="flex flex-col justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <Link
            href="/tags"
            className="bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 rounded-md px-4 py-2 text-sm font-medium text-white"
          >
            Browse Topics
          </Link>
          <Link
            href="/resources"
            className="border-primary-500 text-primary-500 hover:bg-primary-50 rounded-md border px-4 py-2 text-sm font-medium dark:hover:bg-gray-800"
          >
            Security Resources
          </Link>
        </div>
      </div>

      {/* Main content area with sidebar */}
      <div className="flex flex-col justify-between xl:flex-row">
        <div className="divide-y divide-gray-200 xl:w-[88%] xl:pr-8 dark:divide-gray-700">
          {/* Latest news section */}
          <div className="pt-6">
            <h2 className="text-2xl leading-9 font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 dark:text-gray-100">
              Latest Updates
            </h2>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {!posts.length && 'No posts found.'}
              {posts.slice(0, MAX_DISPLAY).map((post) => {
                const { slug, date, title, summary, tags } = post
                return (
                  <li key={slug} className="py-6">
                    <article>
                      <div className="space-y-2 xl:grid xl:grid-cols-1 xl:items-baseline xl:space-y-0">
                        <div className="space-y-5">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-2xl leading-8 font-bold tracking-tight">
                                <Link
                                  href={`/blog/${slug}`}
                                  className="text-gray-900 dark:text-gray-100"
                                >
                                  {title}
                                </Link>
                              </h3>
                              <div className="flex flex-wrap">
                                {tags.map((tag) => (
                                  <Tag key={tag} text={tag} />
                                ))}
                              </div>
                              <div className="mt-2 text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                                <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                              </div>
                            </div>
                            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                              {summary}
                            </div>
                          </div>
                          <div className="text-base leading-6 font-medium">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                              aria-label={`Read more: "${title}"`}
                            >
                              Read more &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
          </div>
          {posts.length > MAX_DISPLAY && (
            <div className="flex justify-end text-base leading-6 font-medium">
              <Link
                href="/blog"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="All posts"
              >
                View all posts &rarr;
              </Link>
            </div>
          )}
          {siteMetadata.newsletter?.provider && (
            <div id="newsletter" className="flex items-center justify-center pt-4">
              <div className="w-full max-w-2xl">
                <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800/50">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                    Stay Updated on Security Threats
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    Get the latest cybersecurity news and analysis delivered to your inbox.
                  </p>
                  <NewsletterWrapper />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </>
  )
}
