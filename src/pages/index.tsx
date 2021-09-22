import { GetStaticProps } from 'next'
import { RichText } from 'prismic-reactjs'
import Prismic from '@prismicio/client'

import { prismicClient } from 'services/prismic'

import { Home, HomeTemplateProps } from 'templates/Home'

export default function Index(props: HomeTemplateProps) {
  return (
    <Home {...props} />
  )
}

export const getStaticProps: GetStaticProps<HomeTemplateProps> = async () => {

  const prismic = prismicClient()

  const response = await prismic.query(
    Prismic.Predicates.at('document.type', 'article'),
    {
      pageSize: 7,
      orderings: '[document.first_publication_date desc]'
    }
  )

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      thumbnail: {
        url: post.data?.thumbnail.url,
        alt: post.data?.thumbnail.alt,
      },
      title: RichText.asText(post.data.title),
      except: RichText.asText(post.data.except),
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
