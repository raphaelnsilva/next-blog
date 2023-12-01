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
  params: {
    slug: string
  }

  article: {
    slug: string
    title: string
    category: string
    publishDate: string
    postImage: { responsiveImage: ResponsiveImageType }
    content: {
      value: object
      blocks: object
    }
  }

  responsiveImage: ResponsiveImageType
  record: {
    __typename: string
    id: string
    image: {
      responsiveImage: {
        width: number
        webpSrcSet: string
        srcSet: string
        src: string
        sizes: string
        height: number
        bgColor: string
        base64: string
        aspectRatio: number
      }
    }
  }
}

export default async function Post({ params }: Types) {
  const ARTICLE_QUERY = `
    query Query($slug: String)  {
      article(filter: {slug: {eq: $slug}}) {
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
    variables: { slug: params.slug },
    revalidate: 10,
    visualEditingBaseUrl: false
  })

  const article = response.article

  return (
    <>
      <main className={styles.postContent}>
        <article>
          <h1 className={styles.postTitle}>{article.title}</h1>
          {/* <p>{post.excerpt}</p> */}
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
            renderBlock={(context) => {
              const imageRecord = context.record.image as Types
              // eslint-disable-next-line jsx-a11y/alt-text
              return <Image data={imageRecord.responsiveImage} />
            }}
          />
        </article>
      </main>
    </>
  )
}
