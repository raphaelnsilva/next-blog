import { performRequest } from '../lib/datocms'
import { Metadata } from 'next'
import styles from './page.module.css'
import Link from 'next/link'
import { Image } from 'react-datocms'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { ResponsiveImageType } from 'react-datocms'

export const metadata: Metadata = {
  title: 'Início | Mundo Da Cozinha',
  description: ''
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

  const homepageQuery = await performRequest({
    query: HOMEPAGE_QUERY,
    revalidate: 60,
    visualEditingBaseUrl: false
  })

  const allArticles = homepageQuery.allArticles

  const categoriesSet = new Set<string>()
  allArticles.forEach(({ category }: Articles) => {
    categoriesSet.add(category)
  })

  const categoriesList = Array.from(categoriesSet)

  return (
    <article className={styles.article}>
      <section>
        <h1 className={styles.header}>Últimas Receitas</h1>
        <div className={styles.section}>
          {allArticles.slice(0, 6).map((article: Articles) => (
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
        </div>
      </section>
      {categoriesList.map((category) => (
        <section key={category}>
          <h1 className={styles.header}>{category}</h1>
          <div key={category} className={styles.section}>
            {allArticles
              .slice(0, 3)
              .filter(
                (currentCategory: { category: string }) =>
                  currentCategory.category === `${category}`
              )
              .map((article: Articles) => (
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
          </div>
        </section>
      ))}
    </article>
  )
}
