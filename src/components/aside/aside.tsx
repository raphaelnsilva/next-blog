'use client'
import { useState } from 'react'
import { Article } from '../../interfaces/types'
import styles from './aside.module.css'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'

interface PostProps {
  data: Article[]
}

export default function Aside({ data }: PostProps) {
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
    <aside className={styles.aside}>
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
          className={styles.selectOptions}
          name='categorias'
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value=''>Todas Receitas</option>
          <option value='receitas doces'>Receitas Doces</option>
          <option value='receitas salgadas'>Receitas Salgadas</option>
          <option value='caldos'>Caldos</option>
          <option value='bebidas'>Bebidas</option>
          <option value='curiosidades'>Curiosidades</option>
        </select>
      </nav>
      <ul className={styles.asidePosts}>
        {posts.length === 0 ? (
          <p className={styles.errorSearch}>
            Nenhum post encontrado na pesquisa.
          </p>
        ) : (
          posts.map((post: Article) => (
            <Link key={post.slug} href={`/posts/${post.slug}`}>
              <li>
                <p className={styles.asidePostTitle}>{post.title}</p>
                <span>{post.category}</span>
              </li>
            </Link>
          ))
        )}
      </ul>
    </aside>
  )
}
