import Link from 'next/link'
import { FaRegCalendarAlt } from 'react-icons/fa'
import styles from './preview.module.css'
import { Article } from '../../interfaces/types'
import { Image } from 'react-datocms'

export default function Preview({
  title,
  excerpt,
  publishDate,
  slug,
  postImage,
  category
}: Article) {
  return (
    <li className={styles.postsContainer}>
      <Link href={`/posts/${slug}`}>
        <h1 className={styles.postLink}>{title}</h1>
      </Link>
      <Link href={`/posts/${slug}`}>
        {/*eslint-disable-next-line jsx-a11y/alt-text */}
        <Image className={styles.postImage} data={postImage.responsiveImage} />
      </Link>
      <span className={styles.publishData}>
        <FaRegCalendarAlt />
        Publicado em: {publishDate}
      </span>
      <p>{excerpt}</p>
      <p>{category}</p>
    </li>
  )
}
