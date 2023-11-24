import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/components/navigation/navigation'

describe('Header Component', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<Header />)
    expect(screen.getByText('MundoDev')).toBeInTheDocument()
    expect(screen.getByTestId('menuIcons')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Posts')).toBeInTheDocument()
    expect(screen.getByText('Sobre')).toBeInTheDocument()
  })

  it('Deve alternar o estado do menu ao clicar', () => {
    render(<Header />)
    const menuIcons = screen.getByTestId('menuIcons')
    const expandedMenu = screen.getByTestId('expandedMenu')
    expect(screen.queryByTestId('expandedMenu')).not.toBeInTheDocument()
    fireEvent.click(menuIcons)
    expect(expandedMenu).toBeInTheDocument()
    fireEvent.click(menuIcons)
    expect(screen.queryByTestId('expandedMenu')).not.toBeInTheDocument()
  })

  it('Deve fechar o menu ao clicar em Home (usando classe)', () => {
    render(<Header />)

    const home = screen.getByTestId('Home')
    fireEvent.click(home)
    const expandedMenu = screen.getByTestId('expandedMenu')
    expect(expandedMenu).toBeInTheDocument()
    const homeLink = screen.getByText('Home', { selector: '.navMenuExpanded' })
    fireEvent.click(homeLink)
    expect(screen.queryByTestId('expandedMenu')).not.toBeInTheDocument()
  })

  it('Deve fechar o menu ao clicar em Posts (usando classe)', () => {
    render(<Header />)

    fireEvent.click(screen.getByText('Posts'))
    const expandedMenu = screen.getByTestId('expandedMenu')
    expect(expandedMenu).toBeInTheDocument()
    const homeLink = screen.getByText('Posts', { selector: '.navMenuExpanded' })
    fireEvent.click(homeLink)
    expect(screen.queryByTestId('expandedMenu')).not.toBeInTheDocument()
  })
})
