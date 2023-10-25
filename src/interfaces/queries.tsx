export const HOMEPAGE_QUERY = `
  query Query {
    allArticles {
      slug
      title
      excerpt
      publishDate
      author
    }
  }
`
