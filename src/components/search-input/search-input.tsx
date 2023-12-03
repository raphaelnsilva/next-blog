'use client'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import styles from './search-input.module.css'
import { FaSearch } from 'react-icons/fa'

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()
  const pathname = usePathname()
  const [query] = useDebounce(searchQuery, 500)

  console.log(pathname)

  useEffect(() => {
    if (!query) {
      router.push('/')
    } else {
      router.push(`/search?query=${query}`)
    }
  }, [router, query])

  return (
    <aside className={styles.aside}>
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
    </aside>
  )
}

export default SearchInput
