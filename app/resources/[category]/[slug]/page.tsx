import { allResources } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import { genPageMetadata } from 'app/seo'
import resourcesData from '@/data/resourcesData'
import { Metadata } from 'next'

export const generateStaticParams = async () => {
  return allResources
    .filter((resource) => !resource.draft)
    .map((resource) => ({
      category: resource.category,
      slug: resource.slug,
    }))
}

export async function generateMetadata(props: {
  params: Promise<{ category: string; slug: string }>
}): Promise<Metadata> {
  const params = await props.params
  const { category, slug } = params

  const resource = allResources.find(
    (resource) => resource.slug === slug && resource.category === category
  )

  if (!resource) {
    return genPageMetadata({
      title: 'Resource Not Found',
      description: 'The requested resource could not be found.',
    })
  }

  return genPageMetadata({
    title: resource.title,
    description: resource.description,
  })
}

export default async function ResourcePage(props: {
  params: Promise<{ category: string; slug: string }>
}) {
  const params = await props.params

  const { category, slug } = params

  const resource = allResources.find(
    (resource) => resource.slug === slug && resource.category === category
  )

  if (!resource) {
    notFound()
  }

  const categoryInfo = resourcesData.find((r) => r.slug === category)

  const relatedResources = allResources
    .filter((r) => r.category === category && r.slug !== slug && !r.draft)
    .slice(0, 3)

  return (
    <>
      <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <header className="pt-6 xl:pb-6">
          <div className="space-y-1 text-center">
            <div>
              <PageTitle>{resource.title}</PageTitle>
            </div>
          </div>
        </header>

        <div className="divide-y divide-gray-200 pb-8 dark:divide-gray-700">
          <header className="space-y-1 border-b border-gray-200 pt-6 pb-6 dark:border-gray-700">
            <div className="flex flex-col justify-between sm:flex-row sm:items-center">
              <div>
                <Link
                  href={`/resources/${category}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium uppercase"
                >
                  {categoryInfo?.title || category}
                </Link>
              </div>
              <div className="text-sm leading-6 font-medium text-gray-500 dark:text-gray-400">
                <span>Last Updated: </span>
                <time dateTime={resource.date}>
                  {new Date(resource.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </header>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="prose dark:prose-dark prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 max-w-none pt-10 pb-8 text-gray-900 dark:text-gray-100">
              <MDXLayoutRenderer
                code={resource.body.code}
                components={components}
                toc={resource.toc}
              />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 pb-6 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <div>
                <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                  Tags
                </h2>
                <div className="flex flex-wrap">
                  {resource.tags?.map((tag) => (
                    <Link
                      key={tag}
                      href={`/tags/${tag}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              {relatedResources.length > 0 && (
                <div className="flex flex-col sm:items-end">
                  <h2 className="mb-2 text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                    Related Resources
                  </h2>
                  <div className="flex flex-col space-y-2">
                    {relatedResources.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/resources/${related.category}/${related.slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {related.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
