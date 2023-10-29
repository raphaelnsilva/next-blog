import { ARTICLE_QUERY, PATHS_QUERY } from '../../../interfaces/queries'
import { performRequest } from '../../../lib/datocms'
import Renderer from '../../../components/renderer/renderer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Post | MundoDev`
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await performRequest({
    query: ARTICLE_QUERY,
    variables: { slug: params.slug },
    revalidate: 60
  })

  return (
    <main>
      <Renderer post={post.article} />
    </main>
  )
}

export async function generateStaticParams() {
  const slugQuery = await performRequest({
    query: PATHS_QUERY,
    revalidate: 1
  })
  return slugQuery.allArticles
}
