import { GetStaticPaths, GetStaticProps } from "next"
import { RichText } from 'prismic-reactjs'

import { prismicClient } from "../../services/prismic"

import Post, { PostTemplateProps } from "../../templates/post";

export default function Index(props: PostTemplateProps) {

  return (
    <Post {...props} />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<PostTemplateProps> = async ({ params }) => {

  const { slug } = params

  const prismic = prismicClient()

  const response = await prismic.getByUID('article', slug as string, {})

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    thumbnail: {
      url: response.data?.thumbnail.url,
      alt: response.data?.thumbnail.alt
    },
    body: response.data.body,
    except: RichText.asText(response.data.except),
    createdAt: new Date(response.first_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return {
    props: {
      post
    },
    revalidate: 60 * 60 * 12 // 12h
  }
}
