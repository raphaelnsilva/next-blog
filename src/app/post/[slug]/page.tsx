import { performRequest } from '../../../lib/datocms'
import { Metadata } from 'next'
import { ResponsiveImageType } from 'react-datocms'
import styles from './page.module.css'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { Image, StructuredText } from 'react-datocms'

export const metadata: Metadata = {
  title: 'Post'
}

interface Types {
  responsiveImage: ResponsiveImageType
  slug: string
  title: string
  category: string
  publishDate: string
  postImage: { responsiveImage: ResponsiveImageType }
  content: {
    value: {
      schema: 'dast'
      document: {
        type: 'root'
        children: []
      }
    }
    blocks: [
      {
        __typename: string
        id: string
        image: {
          responsiveImage: ResponsiveImageType
        }
      }
    ]
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  const ARTICLE_QUERY = `
    query Query {
      article(filter: {slug: {eq: "${params.slug}"}}) {
        slug
        title
        category
        publishDate
        postImage { 
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
        content {
          value
          blocks {
            __typename
            ... on ImageRecord {
              id
              image { 
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
        }
      }
    }
  `

  const response = await performRequest({
    query: ARTICLE_QUERY,
    revalidate: 10,
    visualEditingBaseUrl: false
  })

  const article: Types = response.article

  return (
    <>
      <main className={styles.postContent}>
        <article>
          <h1 className={styles.postTitle}>{article.title}</h1>
          <div className={styles.metaData}>
            <span className={styles.postDate}>
              <FaRegCalendarAlt />
              Publicado em: {article.publishDate}
            </span>
            <span className={styles.postCategory}>{article.category}</span>
          </div>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image data={article.postImage.responsiveImage} />
          <StructuredText
            data={article.content}
            renderBlock={({ record }) => {
              // eslint-disable-next-line jsx-a11y/alt-text
              return <Image data={record.image.responsiveImage} />
            }}
          />
        </article>
      </main>
    </>
  )
}
