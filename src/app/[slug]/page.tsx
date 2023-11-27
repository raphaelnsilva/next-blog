import { ARTICLE_QUERY } from '../../interfaces/queries'
import { HOMEPAGE_QUERY } from '../../interfaces/queries'
import { performRequest } from '../../lib/datocms'
import ArticleRender from '../../components/article-render/article-render'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Post | MundoDev'
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await performRequest({
    query: ARTICLE_QUERY,
    variables: { slug: params.slug },
    revalidate: 10
  })

  const { allArticles } = await performRequest({
    query: HOMEPAGE_QUERY,
    revalidate: 10
  })

  const articles = allArticles

  return <ArticleRender post={post.article} allPosts={articles} />
}
