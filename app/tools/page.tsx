'use client'

import { useState } from 'react'
import Link from '@/components/Link'
import toolsData, { categories } from '@/data/toolsData'

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredTools =
    selectedCategory === 'All'
      ? toolsData
      : toolsData.filter((tool) => tool.category === selectedCategory)

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Security Tools Directory
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Find and compare the best cybersecurity tools for your needs
          </p>
        </div>

        <div className="container py-12">
          {/* Category Filters */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <div
                key={tool.title}
                className="hover:border-primary-500 dark:hover:border-primary-500 relative rounded-lg border-2 border-gray-200 p-6 transition-colors md:col-span-1 dark:border-gray-700"
              >
                {tool.isEditorsChoice && (
                  <div className="bg-primary-500 absolute -top-3 -right-3 rounded-full px-3 py-1 text-sm font-medium text-white">
                    Editor's Choice
                  </div>
                )}
                <div className="mb-2">
                  <h2 className="text-2xl leading-8 font-bold tracking-tight">
                    <Link href={tool.link} className="text-gray-900 dark:text-gray-100">
                      {tool.title}
                    </Link>
                  </h2>
                  <span className="text-primary-500 text-sm font-medium">{tool.price}</span>
                </div>
                <div className="mb-2 flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                    {tool.rating}/5
                  </span>
                </div>
                <span className="mb-3 inline-block rounded-full bg-gray-100 px-2 py-1 text-xs font-medium dark:bg-gray-800">
                  {tool.category}
                </span>
                <p className="prose mb-3 text-gray-500 dark:text-gray-400">{tool.description}</p>
                <Link
                  href={tool.link}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center text-base leading-6 font-medium"
                  aria-label={`Link to ${tool.title}`}
                >
                  Get started &rarr;
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            <p>
              Disclosure: We may earn a commission when you purchase through our affiliate links.
              This helps support our work at no additional cost to you.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
