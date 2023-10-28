'use client'
import styles from './footer.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathName = usePathname()

  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerParagraph}>
        Todos os diretor reservados &copy;
      </p>
      <ul className={styles.navList}>
        <Link href='/'>
          <li
            className={
              pathName === '/' ? `${styles.navLinksActive}` : styles.navLinks
            }
          >
            Home
          </li>
        </Link>
        <Link href='/posts'>
          <li
            className={
              pathName === '/posts'
                ? `${styles.navLinksActive}`
                : styles.navLinks
            }
          >
            Posts
          </li>
        </Link>
        <Link href='/about'>
          <li
            className={
              pathName === '/about'
                ? `${styles.navLinksActive}`
                : styles.navLinks
            }
          >
            Sobre
          </li>
        </Link>
      </ul>
    </footer>
  )
}
