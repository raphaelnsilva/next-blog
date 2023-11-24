import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image src='/brand.png' alt={'brand'} width={100} height={100} />
      <h1>Receitas Da Dona Maria</h1>
    </header>
  )
}
