import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
  isLast?: boolean
}

const Tag = ({ text, isLast = false }: Props) => {
  return (
    <span className="inline-flex items-center">
      <Link
        href={`/tags/${slug(text)}`}
        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium uppercase"
      >
        {text.split(' ').join('-')}
      </Link>
      {!isLast && <span className="mx-2 text-gray-500 dark:text-gray-400">·</span>}
    </span>
  )
}

export default Tag
