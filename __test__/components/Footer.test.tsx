import { render, screen } from '@testing-library/react'
import Footer from '@/components/footer/footer'

describe('Footer component', () => {
  it('Deve renderizar o componente Footer corretamente', () => {
    render(<Footer />)

    // eslint-disable-next-line prettier/prettier
    expect(screen.getByText('Todos os diretor reservados ©')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Posts')).toBeInTheDocument()
  })
})
