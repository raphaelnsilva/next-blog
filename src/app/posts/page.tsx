import { performRequest } from '../../lib/datocms'
import { Image, ResponsiveImageType } from 'react-datocms'
import styles from './page.module.css'
import Link from 'next/link'
import { FaRegCalendarAlt } from 'react-icons/fa'

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

export default async function Posts() {
  const POSTS_PAGE = `
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
    query: POSTS_PAGE,
    revalidate: 60,
    visualEditingBaseUrl: false
  })

  const articles = response.allArticles

  return (
    <section className={styles.section}>
      <h1 className={styles.header}>Todas as receitas</h1>
      <ul clwassName={styles.lastsPosts}>
        {articles.map((article: Articles) => (
          <li className={styles.card} key={article.slug}>
            <Link href={`/posts/${article.slug}`}>
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
