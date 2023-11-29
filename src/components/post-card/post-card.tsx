// PostListpost.js
import React from 'react'
import Link from 'next/link'
import { Image } from 'react-datocms'
import { FaRegCalendarAlt } from 'react-icons/fa'
import styles from './post-card.module.css'
import { PostTypes } from '../../interfaces/types'

export default function PostCard({ post }: PostTypes) {
  console.log(post)
  return (
    <li className={styles.card} key={post.slug}>
      <Link href={`/${post.slug}`}>
        <div className={styles.cardBox}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image data={post.postImage.responsiveImage} />
          <div className={styles.cardContent}>
            <span className={styles.category}>{post.category}</span>
            <h1 className={styles.cardTitle}>{post.title}</h1>
            <span className={styles.publishData}>
              <FaRegCalendarAlt />
              Publicado em: {post.publishDate}
            </span>
          </div>
        </div>
      </Link>
    </li>
  )
}
