import Link from 'next/link'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { PiUserCircleGearBold } from 'react-icons/pi'
import styles from './post-preview.module.css'
import { Article } from '../../interfaces/types'
import { Image } from 'react-datocms'

const PostPreview = ({
  title,
  author,
  excerpt,
  publishDate,
  slug,
  postImage
}: Article) => {
  return (
    <article className={styles.postsContainer}>
      <Link href={`/posts/${slug}`}>
        <h1 className={styles.postLink}>{title}</h1>
      </Link>
      <p className={styles.postDate}>
        <PiUserCircleGearBold /> Autor: {author}
      </p>
      <Link href={`/posts/${slug}`}>
        {/*eslint-disable-next-line jsx-a11y/alt-text */}
        <Image data={postImage.responsiveImage} />
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
