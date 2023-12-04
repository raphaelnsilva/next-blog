import type { Metadata } from 'next'
import './global.css'
import Navigation from '../components/navigation/navigation'
import Footer from '../components/footer/footer'
import SearchInput from '../components/search-input/search-input'
import Category from '../components/category/category'
import Breadcrumb from '../components/breadcrumb/breadcrumb'

export const metadata: Metadata = {
  title: 'Receitas da dona Maria',
  description: 'Generated by create next'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-br'>
      <body suppressHydrationWarning={true}>
        <Navigation />
        <Breadcrumb
          homeElement={'Página Inicial'}
          separator={<span> {'>'} </span>}
          capitalizeLinks
        />
        <main className='myMain'>
          {children}
          <aside className='myAside'>
            <SearchInput />
            <Category />
          </aside>
        </main>
        <Footer />
      </body>
    </html>
  )
}
