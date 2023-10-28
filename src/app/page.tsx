import styles from './page.module.css'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home | MundoDev'
}

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <h1>
        Tudo sobre tecnologia <br /> em um só lugar
      </h1>
      <ul className={styles.linksList}>
        <Link href='/posts' className={styles.postLink}>
          Últimos Posts
        </Link>
        <Link href='/about' className={styles.aboutLink}>
          Sobre nós
        </Link>
      </ul>
    </main>
  )
}
