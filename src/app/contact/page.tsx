import Contact from '../../components/contact/contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contatos | Mundo Da Cozinha'
}

export default function contact() {
  return <Contact />
}
