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

  return (
    <main>
      <section>
        <h1>{allArticles.title}</h1>
      </section>
    </main>
  )
}
