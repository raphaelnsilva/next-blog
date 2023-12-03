import { performRequest } from '@/lib/datocms'
import styles from './category.module.css'
import Link from 'next/link'

interface Types {
  id: string
  category: string
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

  const categoriesList = Array.from(categoriesSet)

  return (
    <ul className={styles.ul}>
      <h1>Categorias</h1>
      <li className={styles.li}>
        <Link href={'/'}>Todas as receitas</Link>
      </li>
      {categoriesList.map((category) => (
        <li key={category} className={styles.li}>
          <Link href={`/category?query=${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  )
}
