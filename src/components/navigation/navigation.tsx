'use client'
import { usePathname } from 'next/navigation'
import styles from './navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const pathName = usePathname()

  return (
    <>
      <header className={styles.header}>
        <Image src='/brand.png' alt={'brand'} width={80} height={80} />
        <h1>Mundo Da Cozinha</h1>
      </header>
      <nav className={styles.nav}>
        <ul className={styles.navMenu}>
          <Link href='/'>
            <li
              className={
                pathName === '/' ? `${styles.navLinksActive}` : styles.navLinks
              }
            >
              HOME
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
              POSTS
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
              SOBRE NÓS
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
              CONTATOS
            </li>
          </Link>
        </ul>
      </nav>
    </>
  )
}
