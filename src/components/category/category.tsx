import { performRequest } from '@/lib/datocms'
import styles from './category.module.css'
import Link from 'next/link'

interface Types {
  category: string
}

export default async function Category() {
  const CATEGORIES = `
    query MyQuery {
      allArticles {
        category
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
      <h1>CATEGORIAS</h1>
      <Link href='/'>
        <li className={styles.li}>Todas as receitas</li>
      </Link>
      {categoriesList.map((category) => (
        <Link key={category} href={`/category?query=${category}`}>
          <li className={styles.li}>{category}</li>
        </Link>
      ))}
    </ul>
  )
}
