import { performRequest } from '../../lib/datocms'

interface Article {
  slug: string
  title: string
}

export default async function Category({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const category =
    typeof searchParams.query === 'string' ? searchParams.query : undefined
  console.log(category)

  const CATEGORY_QUERY = `
    query MyQuery {
      allArticles(filter: {category: {eq: "bebidas"}}) {
        title
        slug
        category
      }
    }
  `
  const response = await performRequest({
    query: CATEGORY_QUERY,
    revalidate: 0,
    visualEditingBaseUrl: false
  })

  const articles = response.allArticles

  return (
    <div>
      {articles.map((article: Article) => (
        <div key={article.slug}>
          <h1>{article.title}</h1>
        </div>
      ))}
    </div>
  )
}
