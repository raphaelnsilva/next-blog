import { performRequest } from '../../lib/datocms'
import { Image, ResponsiveImageType } from 'react-datocms'
import styles from './page.module.css'
import Link from 'next/link'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { Metadata } from 'next'

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

export const metadata: Metadata = {
  title: 'Posts | Mundo Da Cozinha'
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
    <article className={styles.article}>
      <h1 className={styles.header}>Todas as receitas</h1>
      <section className={styles.section}>
        {articles.map((article: Articles) => (
          <Link
            className={styles.cardLink}
            key={article.slug}
            href={`/posts/${article.slug}`}
          >
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image
              className={styles.myImage}
              data={article.postImage.responsiveImage}
            />
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
    </article>
  )
}
