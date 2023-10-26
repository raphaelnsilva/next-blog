'use client'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { PiUserCircleGearBold } from 'react-icons/pi'
import { Image, StructuredText } from 'react-datocms'
import { RecordType } from '../../interfaces/types'
import { PostTypes } from '../../interfaces/types'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import { useEffect } from 'react'
import styles from './renderer.module.css'

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
    <main>
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
          // eslint-disable-next-line jsx-a11y/alt-text
          return <Image data={imageRecord.responsiveImage} />
        }}
      />
    </main>
  )
}
