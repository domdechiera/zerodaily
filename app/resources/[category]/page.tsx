import { allResources } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'
import resourcesData from '@/data/resourcesData'

export const generateStaticParams = () => {
  return resourcesData.map((resource) => ({
    category: resource.slug,
  }))
}

type Props = {
  params: Promise<{
    category: string
  }>
}

export async function generateMetadata(props: Props) {
  const params = await props.params
  const category = params.category

  const resourceInfo = resourcesData.find((resource) => {
    return resource.slug === category
  })

  if (!resourceInfo) {
    return genPageMetadata({
      title: 'Resource Not Found',
      description: 'The requested resource category could not be found.',
    })
  }

  return genPageMetadata({
    title: resourceInfo.title,
    description: resourceInfo.description,
  })
}

export default async function ResourceCategoryPage(props: Props) {
  const params = await props.params
  const category = params.category

  const resourceInfo = resourcesData.find((resource) => {
    return resource.slug === category
  })

  if (!resourceInfo) {
    notFound()
  }

  // Filter resources by category
  const resources = allResources.filter(
    (resource) => resource.category === category && !resource.draft
  )

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            {resourceInfo.title}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {resourceInfo.description}
          </p>
        </div>

        <div className="container py-12">
          {resources.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {resources.map((resource) => (
                <div
                  key={resource.slug}
                  className="hover:border-primary-500 dark:hover:border-primary-500 rounded-lg border-2 border-gray-200 p-6 transition-colors md:col-span-1 dark:border-gray-700"
                >
                  <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
                    <Link
                      href={`/resources/${category}/${resource.slug.replace(`${category}/`, '')}`}
                      className="text-gray-900 dark:text-gray-100"
                    >
                      {resource.title}
                    </Link>
                  </h2>
                  <p className="prose mb-3 text-gray-500 dark:text-gray-400">{resource.summary}</p>
                  <Link
                    href={`/resources/${category}/${resource.slug.replace(`${category}/`, '')}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
                    aria-label={`Link to ${resource.title}`}
                  >
                    Read more &rarr;
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="prose dark:prose-dark">
              <p>No resources found in this category. Check back soon for updates!</p>
            </div>
          )}
        </div>

        <div className="container py-6">
          <Link
            href="/resources"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
          >
            &larr; Back to all resources
          </Link>
        </div>
      </div>
    </>
  )
}
