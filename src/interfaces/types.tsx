import { ResponsiveImageType } from 'react-datocms'

export interface Article {
  slug: string
  title: string
  excerpt: string
  publishDate: string
  postImage: {
    url: string
    responsiveImage: {
      width: number
      webpSrcSet: string
      srcSet: string
      src: string
      sizes: string
      height: number
      bgColor: string
      base64: string
      aspectRatio: number
    }
  }
}

export interface RecordType {
  responsiveImage: ResponsiveImageType
  record: {
    __typename: string
    id: string
    image: {
      responsiveImage: {
        width: number
        webpSrcSet: string
        srcSet: string
        src: string
        sizes: string
        height: number
        bgColor: string
        base64: string
        aspectRatio: number
      }
    }
  }
}

export interface PostTypes {
  post: {
    post: object
    slug: string
    title: string
    author: string
    excerpt: string
    publishDate: string
    content: null
    postImage: {
      url: string
      responsiveImage: {
        width: number
        webpSrcSet: string
        srcSet: string
        src: string
        sizes: string
        height: number
        bgColor: string
        base64: string
        aspectRatio: number
      }
    }
  }
}
