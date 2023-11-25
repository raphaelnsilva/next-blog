'use client'
import styles from './renderer.module.css'
import { useEffect } from 'react'
import { RecordType } from '../../interfaces/types'
import { PostTypes } from '../../interfaces/types'
import { Image, StructuredText } from 'react-datocms'
import { FaRegCalendarAlt } from 'react-icons/fa'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import Aside from '../aside/aside'

export default function Renderer({ post, allPosts }: PostTypes) {
  useEffect(() => {
    const codeBlocks = document.querySelectorAll('pre')
    codeBlocks.forEach((codeBlock) => {
      const language = codeBlock.getAttribute('data-language')
      codeBlock.classList.add(`language-${language}`)
      Prism.highlightElement(codeBlock)
    })
  }, [post])

  return (
    <main className={styles.postContent}>
      <article>
        <h1 className={styles.postTitle}>{post.title}</h1>
        {/* <p>{post.excerpt}</p> */}
        <p className={styles.postDate}>
          <FaRegCalendarAlt /> Publicado em: {post.publishDate}
        </p>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image data={post.postImage.responsiveImage} />
        <StructuredText
          data={post.content}
          renderBlock={(context) => {
            const imageRecord = context.record.image as RecordType
            // eslint-disable-next-line jsx-a11y/alt-text
            return <Image data={imageRecord.responsiveImage} />
          }}
        />
      </article>
      <Aside data={allPosts} />
    </main>
  )
}
