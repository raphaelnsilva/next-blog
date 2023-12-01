'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import styles from './search.module.css'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryQuery, setCategoryQuery] = useState('')
  const router = useRouter()
  const [query] = useDebounce(searchQuery, 500)
  const [category] = useDebounce(categoryQuery, 500)

  useEffect(() => {
    if (!query) {
      router.push('/')
    } else {
      router.push(`/search?query=${query}`)
    }
  }, [router, query])

  console.log(query)

  useEffect(() => {
    if (!category) {
      router.push('/')
    } else {
      setSearchQuery('')
      router.push(`/category?query=${category}`)
    }
  }, [router, category])

  console.log(category)

  return (
    <aside className={styles.aside}>
      <form onSubmit={(e) => e.preventDefault()} className={styles.formSearch}>
        <input
          className={styles.inputSearch}
          type='search'
          value={searchQuery}
          placeholder=' pesquise por receitas...'
          name='search'
          onChange={(e) => {
            e.preventDefault()
            setSearchQuery(e.target.value)
          }}
        />
        <button type='submit' className={styles.btnSearch}>
          <FaSearch />
        </button>
      </form>
      <ul>
        <li
          className={styles.li}
          onClick={(e) => {
            e.preventDefault()
            setCategoryQuery(e.target.value)
          }}
          value={''}
        >
          Todas as receitas
        </li>
        <li
          className={styles.li}
          onClick={() => {
            setCategoryQuery('bebidas')
          }}
        >
          Bebidas
        </li>
        <li
          className={styles.li}
          onClick={() => {
            setCategoryQuery('receitas doces')
          }}
        >
          Receitas doces
        </li>
      </ul>
    </aside>
  )
}

export default Search
