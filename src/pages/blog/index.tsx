import { GetStaticProps } from 'next'
import { PrismicText } from '@prismicio/react'

import { createClient } from 'services/prismic'

import { Blog, BlogTemplateProps } from 'templates/Blog'

export default function Index(props: BlogTemplateProps) {
  return (
    <Blog {...props} />
  )
}

export const getStaticProps: GetStaticProps<BlogTemplateProps> = async () => {

  // const response = await prismic.query(
  //   prismicClient.getBy.at('document.type', 'article'),
  //   {
  //     pageSize: 7,
  //     orderings: '[document.first_publication_date desc]'
  //   }
  // )

  const prismicClient = createClient()

  const response = await prismicClient.getAllByType('article', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  })

  const posts = response.map(post => {
    return {
      slug: post.uid,
      thumbnail: {
        url: post.data?.thumbnail.url,
        alt: post.data?.thumbnail.alt,
      },
      title: post.data.title[0].text,
      except: post.data.except[0].text,
      titleRichTextField: post.data.title,
      exceptRichTextField: post.data.except,
      body: post.data?.body,
      createdAt: new Date(post.first_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  const lastPost = posts.shift()
  const allPosts = [...posts]

  return {
    props: {
      lastPost,
      allPosts
    },
    revalidate: 60 * 60 * 12 // 12h
  }
}
