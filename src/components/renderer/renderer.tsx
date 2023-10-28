'use client'
import styles from './renderer.module.css'
import { useEffect } from 'react'
import { RecordType } from '../../interfaces/types'
import { PostTypes } from '../../interfaces/types'
import { Image, StructuredText } from 'react-datocms'
import { PiUserCircleGearBold } from 'react-icons/pi'
import { FaRegCalendarAlt } from 'react-icons/fa'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

export default function Renderer({ post }: PostTypes) {
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
      <header className={styles.postHeader}>
        <h1 className={styles.postTitle}>{post.title}</h1>
        <p className={styles.postDate}>
          <PiUserCircleGearBold /> Autor: {post.author}
        </p>
        <p className={styles.postDate}>
          <FaRegCalendarAlt /> Publicado em: {post.publishDate}
        </p>
      </header>
      <StructuredText
        data={post.content}
        renderBlock={(context) => {
          const imageRecord = context.record.image as RecordType
          console.log(imageRecord)
          // eslint-disable-next-line jsx-a11y/alt-text
          return <Image data={imageRecord.responsiveImage} />
        }}
      />
    </main>
  )
}
