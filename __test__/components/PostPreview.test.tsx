import { render, screen } from '@testing-library/react'
import PostPreview from '@/components/post-preview/post-preview'

const articleData = {
  title: 'Título do Post',
  excerpt: 'Excerto do post',
  publishDate: '2023-10-25',
  slug: 'exemplo-de-slug'
}

describe('PostPreview components', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostPreview {...articleData} />)

    // verifica se tudo está sendo renderizado no componente
    const titleElement = screen.getByText(articleData.title)
    const publishDateElement = screen.getByText(
      `Publicado em: ${articleData.publishDate}`
    )
    const excerptElement = screen.getByText(articleData.excerpt)

    expect(titleElement).toBeInTheDocument()
    expect(publishDateElement).toBeInTheDocument()
    expect(excerptElement).toBeInTheDocument()
  })

  it('deve criar um link para o post com o slug correto', () => {
    render(<PostPreview {...articleData} />)

    // Verifique se o link para o post está presente e tem o atributo "href" correto
    const linkElement = screen.getByRole('link', { name: articleData.title })

    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', `/posts/${articleData.slug}`)
  })
})
