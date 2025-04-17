import { allAuthors } from 'contentlayer/generated'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'
import Image from '@/components/Image'
import { coreContent } from 'pliny/utils/contentlayer'

export const metadata = genPageMetadata({ title: 'Authors' })

export default function AuthorsPage() {
  const authors = allAuthors.map((author) => coreContent(author))

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Authors
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Meet the team behind ZeroDaily
          </p>
        </div>
        <div className="grid gap-8 py-12 md:grid-cols-2">
          {authors.map((author) => (
            <div key={author.slug} className="flex flex-col items-center">
              <div className="relative mb-4 h-48 w-48">
                {author.avatar && (
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    className="rounded-full object-cover"
                  />
                )}
              </div>
              <h2 className="mb-2 text-2xl leading-8 font-bold tracking-tight">
                <Link
                  href={`/authors/${author.slug}`}
                  className="hover:text-primary-500 dark:hover:text-primary-400 text-gray-900 dark:text-gray-100"
                >
                  {author.name}
                </Link>
              </h2>
              {author.occupation && (
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                  {author.occupation}
                  {author.company && ` @ ${author.company}`}
                </p>
              )}
              <div className="prose dark:prose-invert max-w-md text-center">
                {/* Author bio will be shown on their individual page */}
              </div>
              <div className="mt-4">
                <Link
                  href={`/authors/${author.slug}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
