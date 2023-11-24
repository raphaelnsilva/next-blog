'use client'
import { useState  } from 'react'
import { Article } from '../../interfaces/types'
import PostPreview from '../post-preview/post-preview'
import styles from './post.module.css'

interface PostProps {
  data: Article[]
}

export default function Post({ data }: PostProps) {
  const [search, setSearch] = useState('')
  const lowerCase = search.toLowerCase()

  const posts: Article[] = data.filter((post) =>
    post.title.toLowerCase().includes(lowerCase)
  )

  return (
    <main className={styles.main}>
      <section className={styles.allArticles}>
        {posts.map((post: Article) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            publishDate={post.publishDate}
            slug={post.slug}
            postImage={post.postImage}
          />
        ))}
      </section>
      <aside className={styles.aside}>
        <form>
          <label htmlFor='search'>Pesquisar</label>
          <input
            className={styles.inputSearch}
            type='search'
            value={search}
            placeholder=' pesquise por receitas...'
            name='search'
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </aside>
    </main>
  )
}
