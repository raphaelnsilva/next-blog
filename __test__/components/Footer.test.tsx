import { render, screen } from '@testing-library/react'
import Footer from '@/components/footer/footer'

describe('Footer component', () => {
  it('Deve renderizar o componente Footer corretamente', () => {
    render(<Footer />)

    // Verifica se o texto de direitos autorais está presente no componente
    const copyrightText = screen.getByText('Todos os diretor reservados ©')
    const homeLink = screen.getByText('Home')
    const postsLink = screen.getByText('Posts')

    expect(copyrightText).toBeInTheDocument()
    expect(homeLink).toBeInTheDocument()
    expect(postsLink).toBeInTheDocument()
  })
})
