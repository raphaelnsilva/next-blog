import { performRequest } from '../../lib/datocms'
import { HOMEPAGE_QUERY } from '../../interfaces/queries'
import { Metadata } from 'next'
import Articles from '../../components/articles/articles'

export const metadata: Metadata = {
  title: 'Receitas',
  description: 'Descubra novas receitas incríveis!'
}

export default async function Posts() {
  const { allArticles } = await performRequest({
    query: HOMEPAGE_QUERY,
    revalidate: 10
  })
  return <Articles data={allArticles} />
}
