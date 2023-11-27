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
      </ul>
    </nav>
  )
}
