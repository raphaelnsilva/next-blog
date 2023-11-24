'use client'
import { usePathname } from 'next/navigation'
import styles from './navigation.module.css'
import Link from 'next/link'

export default function Header() {
  const pathName = usePathname()

  return (
    <nav className={styles.nav}>
      <ul className={styles.navMenu}>
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
            Receitas
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
            Sobre nós
          </li>
        </Link>
        <Link href='/contact'>
          <li
            className={
              pathName === '/contact'
                ? `${styles.navLinksActive}`
                : styles.navLinks
            }
          >
            Contato
          </li>
        </Link>
      </ul>
    </nav>
  )
}
