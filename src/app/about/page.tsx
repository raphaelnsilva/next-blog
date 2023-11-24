import styles from './page.module.css'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre | MundoDev'
}

export default function About() {
  return (
    <main className={styles.aboutContainer}>
      <div className={styles.teste}>
        <h1>
          As melhores receitas <br /> em um só lugar
        </h1>
        <ul className={styles.linksList}>
          <Link href='/posts' className={styles.postLink}>
            Últimas Receitas
          </Link>
          <Link href='/about' className={styles.aboutLink}>
            Sobre nós
          </Link>
        </ul>
      </div>
      <div>
        <p>
          blog foi concebido com o propósito de compatilhar conhecimentos na
          área da tecnologia. Aqui, compartilhamos artigos abordando uma
          variedade de tópicos relacionados a tecnologias e empreendedorismo em
          geral. Nossa marca e nossas postagens não são de forma alguma
          influenciadas por qualquer partido político.
        </p>
        <p>
          Este blog utiliza um framework avançado e foi projetado para ser
          acessível por qualquer tipo de dispositivo. Foi construído com foco na
          velocidade e em proporcionar uma experiência positiva para o usuário.
          Nossos artigos são elaborados manualmente, sem o uso de inteligência
          artificial. Acreditamos que o conhecimento transmitido aqui deve ser
          claro e de fácil compreensão para programadores de todos os níveis e
          para qualquer pessoa interessada.
        </p>
        <p>
          Nosso compromisso se estende à qualidade do conteúdo publicado.
          constantemente aprofundar nossa pesquisa e manter nossos leitores
          atualizados com as informações mais recentes. Compartilhando
          conhecimento de forma transparente, estamos contribuindo para a
          promoção promoção promoção da educação tecnológica e do
          empreendedorismo, capacitando indivíduos de todos os níveis a explorar
          o mundo da tecnologia com confiança e entusiasmo. Agradecemos a você
          parte dessa jornada e esperamos que encontre nosso blog uma valiosa
          inspiração.
        </p>
      </div>
    </main>
  )
}
