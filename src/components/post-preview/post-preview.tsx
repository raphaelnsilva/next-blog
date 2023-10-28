import Link from 'next/link'
import { FaRegCalendarAlt } from 'react-icons/fa'
import styles from './post-preview.module.css'
import { Article } from '../../interfaces/types'

const PostPreview = ({ title, excerpt, publishDate, slug }: Article) => {
  return (
    <article className={styles.postsContainer}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Link href={`/posts/${slug}`}>
        <h1 className={styles.postLink}>{title}</h1>
      </Link>
      <span className={styles.publishData}>
        <FaRegCalendarAlt />
        Publicado em: {publishDate}
      </span>
      <p>{excerpt}</p>
    </article>
  )
}

export default PostPreview
