import { performRequest } from '../../lib/datocms'
import Link from 'next/link'
import { Metadata } from 'next'
import styles from './page.module.css'
import { Image } from 'react-datocms'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { ResponsiveImageType } from 'react-datocms'
import { BiSolidMessageAltError } from 'react-icons/bi'

export const metadata: Metadata = {
  title: 'Pesquisa'
}

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

export default async function Search({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const search =
    typeof searchParams.query === 'string' ? searchParams.query : undefined

  const FILTER_QUERY = `
    query MyQuery {
      allArticles(filter: {title: {matches: {pattern: "${search}"}}}) {
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
    query: FILTER_QUERY,
    revalidate: 0,
    visualEditingBaseUrl: false
  })

  const articles = response.allArticles

  return (
    <>
      {articles.length === 0 ? (
        <section className={styles.errorMessage}>
          <BiSolidMessageAltError />
          <h1>Desculpe, não encotramos sua pesquisa =( </h1>
        </section>
      ) : (
        <section className={styles.lastsPosts}>
          {articles.map((article: Article) => (
            <Link
              className={styles.cardLink}
              key={article.slug}
              href={`/posts/${article.slug}`}
            >
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
            </Link>
          ))}
        </section>
      )}
    </>
  )
}
