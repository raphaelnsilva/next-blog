'use client'
import { useState } from 'react'
import { Article } from '../../interfaces/types'
import Preview from '../preview/preview'
import styles from './articles.module.css'
import { FaSearch } from 'react-icons/fa'

interface PostProps {
  data: Article[]
}

export default function Articles({ data }: PostProps) {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const lowerCase = search.toLowerCase()

  const posts: Article[] = data.filter((post) => {
    const titleIncludesSearch = post.title.toLowerCase().includes(lowerCase)
    const isCategorySelected =
      selectedCategory === '' ||
      post.category.toLowerCase() === selectedCategory.toLowerCase()

    return titleIncludesSearch && isCategorySelected
  })

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <form className={styles.formSearch}>
          <input
            className={styles.inputSearch}
            type='search'
            value={search}
            placeholder=' pesquise por receitas...'
            name='search'
            onChange={(e) => {
              e.preventDefault()
              setSearch(e.target.value)
            }}
          />
          <button type='button' className={styles.btnSearch}>
            <FaSearch />
          </button>
        </form>
        <select
          name='categorias'
          value={selectedCategory}
          onChange={handleCategoryChange}
          className={styles.selectOptions}
        >
          <option value=''>Todas Receitas</option>
          <option value='receitas doces'>Receitas Doces</option>
          <option value='receitas salgadas'>Receitas Salgadas</option>
          <option value='caldos'>Caldos</option>
          <option value='bebidas'>Bebidas</option>
          <option value='curiosidades'>Curiosidades</option>
        </select>
      </nav>
      <ul className={styles.allArticles}>
        {posts.length === 0 ? (
          <h1>Nenhum post encontrado com a pesquisa.</h1>
        ) : (
          posts.map((post: Article) => (
            <Preview
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              publishDate={post.publishDate}
              slug={post.slug}
              postImage={post.postImage}
              category={post.category}
            />
          ))
        )}
      </ul>
    </main>
  )
}
