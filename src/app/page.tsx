import { performRequest } from '../lib/datocms'
import { Metadata } from 'next'
import styles from './page.module.css'
import Link from 'next/link'
import { Image } from 'react-datocms'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { ResponsiveImageType } from 'react-datocms'

export const metadata: Metadata = {
  title: 'Início | Receitas da dona Maria'
}

interface Articles {
  slug: string
  category: string
  title: string
  publishDate: string
  postImage: {
    url: string
    responsiveImage: ResponsiveImageType
  }
}

export default async function Home() {
  const HOMEPAGE_QUERY = `
    query Query {
      allArticles {
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
    query: HOMEPAGE_QUERY,
    revalidate: 60,
    visualEditingBaseUrl: false
  })

  const allArticles = response.allArticles

  return (
    <section className={styles.section}>
      <h1 className={styles.header}>Últimas Receitas</h1>
      <ul className={styles.lastsPosts}>
        {allArticles.map((article: Articles) => (
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
