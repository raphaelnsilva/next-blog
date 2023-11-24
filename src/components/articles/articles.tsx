'use client'
import { useState } from 'react'
import { Article } from '../../interfaces/types'
import Preview from '../preview/preview'
import styles from './articles.module.css'

interface PostProps {
  data: Article[]
}

export default function Articles({ data }: PostProps) {
  const [search, setSearch] = useState('')
  const lowerCase = search.toLowerCase()

  const posts: Article[] = data.filter((post) =>
    post.title.toLowerCase().includes(lowerCase)
  )

  return (
    <main className={styles.main}>
      <aside>
        <form className={styles.form}>
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
      <section className={styles.allArticles}>
        {posts.map((post: Article) => (
          <Preview
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            publishDate={post.publishDate}
            slug={post.slug}
            postImage={post.postImage}
            category={post.category}
          />
        ))}
      </section>
    </main>
  )
}
