import HomeRender from '@/components/home-render/home-render'
import { HOMEPAGE_QUERY } from '@/interfaces/queries'
import { performRequest } from '@/lib/datocms'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inicio'
}

export default async function Home() {
  const { allArticles } = await performRequest({
    query: HOMEPAGE_QUERY,
    revalidate: 10
  })

  return <HomeRender data={allArticles} />
}
