'use client'
import styles from './footer.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Footer() {
  const pathName = usePathname()

  return (
    <footer className={styles.footerContainer}>
      <section className={styles.brandContainer}>
        <Image src='/brand.png' alt={'brand'} width={80} height={80} />
        <h1>
          Mundo Da <br /> Cozinha
        </h1>
        <p className={styles.footerParagraph}>
          Bem-vindo(a) ao nosso blog! <br />
          Aqui, você encontrará um <br />
          mundo delicioso de sabores, <br />
          texturas e aromas. <br />
          <br />
          Todos os diretor reservados &copy;
        </p>
      </section>
      <section className={styles.navContainer}>
        <h1>Menu</h1>
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
      </section>
    </footer>
  )
}
