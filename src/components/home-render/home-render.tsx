'use client'
import { useState } from 'react'
import { AllPostsType } from '../../interfaces/types'
import styles from './home-render.module.css'
import { FaSearch } from 'react-icons/fa'
import PostCard from '../post-card/post-card'
import { Article } from '../../interfaces/types'
import { BiSolidMessageAltError } from 'react-icons/bi'
import { IoIosArrowRoundBack } from 'react-icons/io'

export default function HomeRender({ data }: AllPostsType) {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const lowerCase = search.toLowerCase()

  const categories = Array.from(
    new Set(data.map((post) => post.category.toLowerCase()))
  )

  const posts = data.filter((post) => {
    const titleIncludesSearch = post.title.toLowerCase().includes(lowerCase)
    const isCategorySelected =
      selectedCategory === '' ||
      post.category.toLowerCase() === selectedCategory.toLowerCase()

    return titleIncludesSearch && isCategorySelected
  })

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h1 className={styles.header}>Últimas Receitas :</h1>
        <ul className={styles.allArticles}>
          {posts.length === 0 ? (
            <div className={styles.errorSearch}>
              <BiSolidMessageAltError />
              <p>Não encontramos sua pesquisa</p>
              <button
                className={styles.clearInput}
                onClick={() => setSearch('')}
              >
                <IoIosArrowRoundBack />
                <p>Ver todas receitas</p>
              </button>
            </div>
          ) : (
            posts.map((post: Article) => (
              <PostCard
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
      </section>
      <aside className={styles.aside}>
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
        <ul className={styles.selectOptions}>
          <h1>Categorias:</h1>
          <li
            className={selectedCategory === '' ? styles.selected : ''}
            onClick={() => handleCategoryChange('')}
          >
            Todas Receitas
          </li>
          {categories.map((category) => (
            <li
              key={category}
              className={
                selectedCategory.toLowerCase() === category
                  ? styles.selected
                  : ''
              }
              onClick={() => handleCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>
      </aside>
    </main>
  )
}
