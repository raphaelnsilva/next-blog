export const HOMEPAGE_QUERY = `
  query Query {
    allArticles {
      slug
      title
      excerpt
      publishDate
      author
      postImage { 
        url
        responsiveImage {
          width
          webpSrcSet
          srcSet
          src
          sizes
          height
          bgColor
          base64
          aspectRatio
        }
      }
    }
  }
`

export const ARTICLE_QUERY = `
  query Query($slug: String)  {
    article(filter: {slug: {eq: $slug}}) {
      slug
      title
      author
      excerpt
      publishDate
      postImage { 
        url
        responsiveImage {
          width
          webpSrcSet
          srcSet
          src
          sizes
          height
          bgColor
          base64
          aspectRatio
        }
      }
      content {
        value
        blocks {
          __typename
          ... on ImageRecord {
            id
            image { 
              responsiveImage {
                width
                webpSrcSet
                srcSet
                src
                sizes
                height
                bgColor
                base64
                aspectRatio
              }
            }
          }
        }
      }
    }
  }
`
