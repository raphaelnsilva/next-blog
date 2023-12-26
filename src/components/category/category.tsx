import { performRequest } from '@/lib/datocms'
import styles from './category.module.css'
import Link from 'next/link'

interface Types {
  category: string
  id: string
}

export default async function Category() {
  const CATEGORIES = `
    query MyQuery {
      allArticles {
        category
        id
      }
    }
  `
  const response = await performRequest({
    query: CATEGORIES,
    revalidate: 10,
    visualEditingBaseUrl: false
  })

  const categoriesSet = new Set<string>()
  response.allArticles.forEach(({ category }: Types) => {
    categoriesSet.add(category)
  })

  const categories = Array.from(categoriesSet)

  return (
    <ul className={styles.ul}>
      <h1>Categorias</h1>
      <Link href='/'>
        <li className={styles.li}>Todas as receitas</li>
      </Link>
      {categories.map((category) => (
        <li key={category} className={styles.li}>
          <Link href={`/category?query=${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  )
}
