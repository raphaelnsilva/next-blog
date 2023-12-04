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
        <Image src='/brand.png' alt={'brand'} width={100} height={100} />
        <h1>Receitas Da Dona Maria</h1>
      </header>
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
          <Link href='/contact'>
            <li
              className={
                pathName === '/contact'
                  ? `${styles.navLinksActive}`
                  : styles.navLinks
              }
            >
              Contatos
            </li>
          </Link>
        </ul>
      </nav>
    </>
  )
}
