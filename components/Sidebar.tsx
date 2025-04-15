import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import { useEffect, useState } from 'react'

interface TrendingNewsItem {
  title: string
  href: string
  date: string
}

interface PopularResourceItem {
  title: string
  href: string
  category: string
  date: string
}

export default function Sidebar() {
  const [trendingNews, setTrendingNews] = useState<TrendingNewsItem[]>([])
  const [popularResources, setPopularResources] = useState<PopularResourceItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [trendingResponse, resourcesResponse] = await Promise.all([
          fetch('/api/trending'),
          fetch('/api/popular-resources'),
        ])

        if (!trendingResponse.ok || !resourcesResponse.ok) {
          throw new Error('Failed to fetch data')
        }

        const [trendingData, resourcesData] = await Promise.all([
          trendingResponse.json(),
          resourcesResponse.json(),
        ])

        setTrendingNews(trendingData)
        setPopularResources(resourcesData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <aside className="hidden xl:block xl:w-[35%] xl:pl-8">
      <div className="sticky top-24 space-y-12">
        {/* Trending News Section */}
        <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950">
          <h3 className="mb-5 text-lg font-bold text-gray-900 dark:text-white">Trending News</h3>
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
                  <div className="mt-1 h-3 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
          ) : (
            <ul className="space-y-5">
              {trendingNews.map((item, index) => (
                <li
                  key={index}
                  className="border-b border-gray-100 pb-2 last:border-0 dark:border-gray-800"
                >
                  <Link
                    href={item.href}
                    className="hover:text-primary-500 dark:hover:text-primary-400"
                  >
                    <h4 className="text-sm font-medium">{item.title}</h4>
                  </Link>
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    <span>{item.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
            >
              View all news →
            </Link>
          </div>
        </div>

        {/* Popular Resources Section */}
        <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950">
          <h3 className="mb-5 text-lg font-bold text-gray-900 dark:text-white">
            Popular Resources
          </h3>
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
                  <div className="mt-1 h-3 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
          ) : (
            <ul className="space-y-5">
              {popularResources.map((item, index) => (
                <li
                  key={index}
                  className="border-b border-gray-100 pb-2 last:border-0 dark:border-gray-800"
                >
                  <Link
                    href={item.href}
                    className="hover:text-primary-500 dark:hover:text-primary-400"
                  >
                    <h4 className="text-sm font-medium">{item.title}</h4>
                  </Link>
                  <div className="mt-1 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{item.category}</span>
                    <span>{item.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4">
            <Link
              href="/resources"
              className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
            >
              View all resources →
            </Link>
          </div>
        </div>
      </div>
    </aside>
  )
}
