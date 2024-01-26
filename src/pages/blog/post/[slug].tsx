import { GetStaticPaths, GetStaticProps } from "next"
import { prismicClient } from "services/prismic"

import { Post, PostTemplateProps } from "templates/Post";

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

  const response = await prismicClient.getByUID('article', slug as string, {})

  const post = {
    slug,
    title: response.data.title[0].text,
    titleRichTextField: response.data.title,
    except: response.data.except[0].text,
    thumbnail: {
      url: response.data?.thumbnail.url,
      alt: response.data?.thumbnail.alt
    },
    body: response.data.body,
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
