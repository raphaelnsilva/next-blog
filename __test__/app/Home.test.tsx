import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('Should render properly', () => {
    render(<Home />)

    const header = screen.getByRole('heading')
    const headerText = 'Olá Mundo'

    expect(header).toHaveTextContent(headerText)
  })
})
