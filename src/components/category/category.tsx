import { performRequest } from '@/lib/datocms'
import styles from './category.module.css'

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
  // const categories = new Set(
  //   response.allArticles.map(
  //     (article: { category: string }) => article.category
  //   )
  // )

  console.log(response)
  return (
    <ul>
      {/* {categories.map((categorie) => (
        // eslint-disable-next-line react/jsx-key
        <li>{categorie}</li>
      ))} */}
    </ul>
  )
}
