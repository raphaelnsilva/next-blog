'use client'
import styles from './footer.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Footer() {
  const pathName = usePathname()

  return (
    <footer className={styles.footerContainer}>
      <header className={styles.header}>
        <Image src='/brand.png' alt={'brand'} width={80} height={80} />
        <h1>
          Mundo Da <br /> Cozinha
        </h1>
        <p>
          Bem-vindo(a) ao nosso blog de receitas! Aqui, você encontrará um mundo
          delicioso de sabores, texturas e aromas.
        </p>
        <p className={styles.footerParagraph}>
          Todos os diretor reservados &copy;
        </p>
      </header>
      <ul className={styles.navList}>
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
    </footer>
  )
}
