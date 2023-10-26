import styles from './page.module.css'
import { performRequest } from '../../lib/datocms'
import PostPreview from '@/components/post-preview/post-preview'
import { Article } from '@/interfaces/types'
import { HOMEPAGE_QUERY } from '@/interfaces/queries'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | MundoDev'
}

export default async function Posts() {
  const { allArticles } = await performRequest({
    query: HOMEPAGE_QUERY,
    revalidate: 6000
  })

  return (
    <main>
      <header className={styles.postsHeader}>Últimos Posts!</header>
      {allArticles.map((article: Article) => (
        <PostPreview
          key={article.slug}
          title={article.title}
          excerpt={article.excerpt}
          publishDate={article.publishDate}
          slug={article.slug}
        />
      ))}
    </main>
  )
}
