'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './search-input.module.css'
import { FaSearch } from 'react-icons/fa'

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (!searchQuery) {
      router.push('/')
    } else {
      router.push(`/search?query=${searchQuery}`)
    }
  }, [router, searchQuery])

  return (
    <div className={styles.container}>
      <h1>PESQUISAR</h1>
      <form className={styles.formSearch} onSubmit={(e) => e.preventDefault()}>
        <input
          className={styles.inputSearch}
          type='search'
          value={searchQuery}
          placeholder=' pesquise por receitas...'
          name='search'
          onChange={(e) => {
            setSearchQuery(e.target.value)
          }}
        />
        <button type='submit' className={styles.btnSearch}>
          <FaSearch />
        </button>
      </form>
    </div>
  )
}

export default SearchInput
