'use client'
import { useState } from 'react'
import { AllPostsType } from '../../interfaces/types'
import styles from './home-render.module.css'
import { FaSearch } from 'react-icons/fa'
import PostCard from '../post-card/post-card'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { Article } from '../../interfaces/types'
import { BiSolidMessageAltError } from 'react-icons/bi'
import { IoIosArrowRoundBack } from 'react-icons/io'
import Link from 'next/link'
import { Image } from 'react-datocms'

export default function HomeRender({ data }: AllPostsType) {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const allCategories = Array.from(
    new Set(data.map((post) => post.category.toLowerCase()))
  )

  const posts = data.filter((post) => {
    const titleIncludesSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase())

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
        {selectedCategory ? <p>{`Categoria: ${selectedCategory}`}</p> : ''}
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
              <li className={styles.card} key={post.slug}>
                <Link href={`/${post.slug}`}>
                  <div className={styles.cardBox}>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <Image data={post.postImage.responsiveImage} />
                    <div className={styles.cardContent}>
                      <span className={styles.category}>{post.category}</span>
                      <h1 className={styles.cardTitle}>{post.title}</h1>
                      <span className={styles.publishData}>
                        <FaRegCalendarAlt />
                        Publicado em: {post.publishDate}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
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
          {allCategories.map((category) => (
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
