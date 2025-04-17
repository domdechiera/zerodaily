import { allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { genPageMetadata } from 'app/seo'
import { notFound } from 'next/navigation'
import { coreContent } from 'pliny/utils/contentlayer'

export const generateMetadata = async ({ params }) => {
  const resolvedParams = await params
  const author = allAuthors.find((p) => p.slug === resolvedParams.slug)
  if (!author) {
    return
  }
  return genPageMetadata({
    title: author.name,
    description: `About ${author.name}`,
  })
}

export const generateStaticParams = async () => {
  return allAuthors.map((p) => ({
    slug: p.slug,
  }))
}

export default async function Page({ params }) {
  const resolvedParams = await params
  const author = allAuthors.find((p) => p.slug === resolvedParams.slug)

  if (!author) {
    notFound()
  }

  const mainContent = coreContent(author)

  return (
    <AuthorLayout content={mainContent}>
      <MDXLayoutRenderer code={author.body.code} />
    </AuthorLayout>
  )
}
