import styles from './page.module.css'
import { Metadata } from 'next'
import { SiNextdotjs, SiTypescript } from 'react-icons/si'
import { PiPlusThin } from 'react-icons/pi'

export const metadata: Metadata = {
  title: 'Home | MundoDev'
}

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <h1>Olá Mundo! </h1>
      <p>
        Projeto desenvolvido inteiramente com <br />
        Next.js e TypeScript com padronizador <br />
        de código e testes automatizados
      </p>
      <div className={styles.homeIcons}>
        <SiNextdotjs className={styles.icon1} />
        <PiPlusThin className={styles.icon2} />
        <SiTypescript className={styles.icon3} />
      </div>
    </main>
  )
}
