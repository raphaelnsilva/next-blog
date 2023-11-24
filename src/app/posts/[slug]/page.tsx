import { ARTICLE_QUERY } from '../../../interfaces/queries'
import { performRequest } from '../../../lib/datocms'
import Renderer from '../../../components/renderer/renderer'
import { Metadata } from 'next'
import Aside from '../../../components/aside/aside'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Post | MundoDev'
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await performRequest({
    query: ARTICLE_QUERY,
    variables: { slug: params.slug },
    revalidate: 60
  })

  return (
    <main className={styles.main}>
      <Renderer post={post.article} />
      <Aside />
    </main>
  )
}
