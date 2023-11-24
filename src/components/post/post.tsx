'use client'
import { useState } from 'react'
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
    <main>
      <header className={styles.mainHeader}>
        <h1 className={styles.postsHeader}>Nossas Receitas!</h1>
        <input
          className={styles.inputSearch}
          type='search'
          value={search}
          placeholder=' Pesquisar'
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>
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
    </main>
  )
}
