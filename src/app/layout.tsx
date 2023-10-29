import type { Metadata } from 'next'
import './global.css'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

export const metadata: Metadata = {
  title: 'MundoDev',
  description: 'Generated by create next'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-br'>
      <body suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
