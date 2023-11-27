import Link from 'next/link'
import { FaRegCalendarAlt } from 'react-icons/fa'
import styles from './post-card.module.css'
import { Article } from '../../interfaces/types'
import { Image } from 'react-datocms'

export default function PostCard({
  title,
  publishDate,
  slug,
  postImage,
  category
}: Article) {
  return (
    <li className={styles.card}>
      <Link href={`/${slug}`}>
        <div className={styles.cardBox}>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image data={postImage.responsiveImage} />
          <div className={styles.cardContent}>
            <span className={styles.category}>{category}</span>
            <h1 className={styles.cardTitle}>{title}</h1>
            <span className={styles.publishData}>
              <FaRegCalendarAlt />
              Publicado em: {publishDate}
            </span>
          </div>
        </div>
      </Link>
    </li>
  )
}
