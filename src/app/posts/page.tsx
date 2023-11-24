import { performRequest } from '../../lib/datocms'
import { HOMEPAGE_QUERY } from '../../interfaces/queries'
import { Metadata } from 'next'
import Post from '../../components/post/post'

export const metadata: Metadata = {
  title: 'Blog | MundoDev',
  description: 'Navegue através de nossos artigos!'
}

export default async function Posts() {
  const { allArticles } = await performRequest({
    query: HOMEPAGE_QUERY,
    revalidate: 10
  })

  return <Post data={allArticles} />
}
