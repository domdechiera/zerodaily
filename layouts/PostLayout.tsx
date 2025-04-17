import { ReactNode } from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import ScrollTop from '@/components/ScrollTop'
import siteMetadata from '@/data/siteMetadata'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  authorDetails: Array<{
    name: string
    slug: string
    avatar?: string
    occupation?: string
    company?: string
    email?: string
  }>
}

import Image from '@/components/Image'

export default function PostLayout({ content, next, prev, children, authorDetails }: LayoutProps) {
  const { path, slug, date, title, tags } = content

  return (
    <SectionContainer>
      <ScrollTop />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pt-8 pb-10 text-center dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              {authorDetails && authorDetails.length > 0 && (
                <div className="flex justify-center gap-3 pt-4 pb-0">
                  {authorDetails.map((author) => (
                    <div key={author.slug} className="flex items-center space-x-2">
                      <Link
                        href={`/authors/${author.slug}`}
                        aria-label={`Go to author page: ${author.name}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-6 w-6 text-gray-400 dark:text-gray-500"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                      </Link>
                      <div className="flex items-center">
                        <Link
                          href={`/authors/${author.slug}`}
                          className="hover:text-primary-500 dark:hover:text-primary-400 font-semibold text-gray-900 dark:text-gray-100"
                          aria-label={`Go to author page: ${author.name}`}
                        >
                          {author.name}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:divide-y-0 dark:divide-gray-700">
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
              <div className="prose dark:prose-invert max-w-none pt-8 pb-8">{children}</div>
              {tags && tags.length > 0 && (
                <div className="py-4 xl:py-8">
                  <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                    Topics
                  </h2>
                  <div className="flex flex-wrap">
                    {tags.map((tag, index) => (
                      <Tag key={tag} text={tag} isLast={index === tags.length - 1} />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <footer>
              <div className="flex flex-row flex-wrap justify-between text-sm font-medium sm:text-base">
                {prev && prev.path && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${prev.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Previous post`}
                    >
                      &larr; Previous
                    </Link>
                  </div>
                )}
                {next && next.path && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${next.path}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Next post`}
                    >
                      Next &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
