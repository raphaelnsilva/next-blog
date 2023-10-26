import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/components/header/header'

describe('Header Component', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<Header />)

    // Verifica se o texto "MundoDev" está presente no componente
    const brandName = screen.getByText('MundoDev')
    expect(brandName).toBeInTheDocument()

    // Verifica se o ícone de menu está presente
    const menuIcons = screen.getByTestId('menuIcons')
    expect(menuIcons).toBeInTheDocument()

    // Verifica se os links "Home" e "Posts" estão presentes
    const homeLink = screen.getByText('Home')
    const postsLink = screen.getByText('Posts')
    expect(homeLink).toBeInTheDocument()
    expect(postsLink).toBeInTheDocument()
  })

  it('Deve alternar o estado do menu ao clicar', () => {
    render(<Header />)

    const menuIcons = screen.getByTestId('menuIcons')

    // Verifica se o menu está fechado inicialmente
    expect(screen.queryByTestId('expandedMenu')).not.toBeInTheDocument()

    // dispara um evento para clicar no icone e expandir o menu
    fireEvent.click(menuIcons)

    // Verifica se o menu está expandido
    const expandedMenu = screen.getByTestId('expandedMenu')
    expect(expandedMenu).toBeInTheDocument()

    // dispara um evento para clicar no icone e fechar o menu
    fireEvent.click(menuIcons)

    // verifica se o menu está fechado
    expect(screen.queryByTestId('expandedMenu')).not.toBeInTheDocument()
  })

  it('Deve fechar o menu ao clicar em Home (usando classe)', () => {
    render(<Header />)

    const menuIcons = screen.getByTestId('menuIcons')

    // Dispara um evento para clicar no ícone e expandir o menu
    fireEvent.click(menuIcons)

    // Verifica se o menu está expandido
    const expandedMenu = screen.getByTestId('expandedMenu')
    expect(expandedMenu).toBeInTheDocument()

    // Encontre o link usando a classe e dispare um evento para clicar nele
    const homeLink = screen.getByText('Home', { selector: '.navMenuExpanded' })
    // Substitua 'your-link-class' pela classe real

    fireEvent.click(homeLink)

    // Verifica se o menu está fechado após clicar no link
    expect(screen.queryByTestId('expandedMenu')).not.toBeInTheDocument()
  })

  it('Deve fechar o menu ao clicar em Posts (usando classe)', () => {
    render(<Header />)

    const menuIcons = screen.getByTestId('menuIcons')

    // Dispara um evento para clicar no ícone e expandir o menu
    fireEvent.click(menuIcons)

    // Verifica se o menu está expandido
    const expandedMenu = screen.getByTestId('expandedMenu')
    expect(expandedMenu).toBeInTheDocument()

    // Encontre o link usando a classe e dispare um evento para clicar nele
    const homeLink = screen.getByText('Posts', { selector: '.navMenuExpanded' })
    // Substitua 'your-link-class' pela classe real

    fireEvent.click(homeLink)

    // Verifica se o menu está fechado após clicar no link
    expect(screen.queryByTestId('expandedMenu')).not.toBeInTheDocument()
  })
})
