import { GetStaticPaths, GetStaticProps } from "next"
import Prism from 'prismjs';
import Image from 'next/image'
import { RichText } from "prismic-dom"
import SEO from "../../components/SEO"
import { prismicClient } from "../../services/prismic"

import styles from './styles.module.scss'

type Post = {
  slug: string
  title: string
  thumbnail: {
    url: string
    alt: string
  },
  content: string
  excerpt: string
  updatedAt: string
}

type PostProps = {
  post: Post
}

export default function Post({ post }: PostProps) {
  return (
    <article className={styles.post}>
      <SEO title={post.title} description={post.excerpt} image={post.thumbnail.url} />
      <time>{post.updatedAt}</time>
      <Image
        src={post.thumbnail.url}
        alt={post.thumbnail.alt}
        width={760}
        height={400}
        objectFit="fill"
      />
      <h1>{post.title}</h1>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { slug } = params

  const prismic = prismicClient()

  const response = await prismic.getByUID('post', String(slug), {})

  console.log(JSON.stringify(response, null, 2))

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    thumbnail: {
      url: response.data.thumbnail.url,
      alt: response.data.thumbnail.alt
    },
    content: RichText.asHtml(response.data.content),
    excerpt: response.data.content.find(content => content.type === 'paragraph')?.text.substring(150, 0) ?? '',
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
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
