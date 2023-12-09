import { performRequest } from '../../lib/datocms'
import styles from './page.module.css'
import Link from 'next/link'
import { Image } from 'react-datocms'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { ResponsiveImageType } from 'react-datocms'

interface Article {
  slug: string
  category: string
  title: string
  publishDate: string
  postImage: {
    url: string
    responsiveImage: ResponsiveImageType
  }
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
      allArticles(filter: {category: {eq: "${category}"}}) {
        slug
        category
        title
        publishDate
        postImage { 
          url
          responsiveImage {
            width
            webpSrcSet
            srcSet
            src
            sizes
            height
            bgColor
            base64
            aspectRatio
          }
        }
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
    <section className={styles.section}>
      <h1 className={styles.header}>Categoria: {category}</h1>
      <ul className={styles.lastsPosts}>
        {articles.map((article: Article) => (
          <li className={styles.card} key={article.slug}>
            <Link href={`/post/${article.slug}`}>
              <div className={styles.cardBox}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image data={article.postImage.responsiveImage} />
                <div className={styles.cardContent}>
                  <span className={styles.category}>{article.category}</span>
                  <h1 className={styles.cardTitle}>{article.title}</h1>
                  <span className={styles.publishData}>
                    <FaRegCalendarAlt />
                    Publicado em: {article.publishDate}
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
