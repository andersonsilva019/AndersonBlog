import { GetStaticProps } from 'next'
import Link from 'next/link'
import { RichText } from 'prismic-dom'
import Prismic from '@prismicio/client'
import SEO from '../components/SEO'
import { prismicClient } from '../services/prismic'
import styles from './Home.module.scss'

type Post = {
  slug: string
  thumbnail: {
    url: string
    alt: string
  }
  title: string
  content: string
  excerpt: string
  updatedAt: string
}

type HomeProps = {
  lastPost: Post
  allPosts: Post[]
}

export default function Home({ lastPost, allPosts }: HomeProps) {
  return (
    <div className={styles.homeContainer}>
      <SEO title="Home" description="Tudo sobre o mundo da programação" />
      <h2>Último post</h2>
      <Link href={`/post/${lastPost.slug}`}>
        <a className={styles.lastPost}>
          <img src={lastPost.thumbnail.url} alt={lastPost.thumbnail.alt} />
          <div className={styles.wrapperInfolastPost}>
            <time>{lastPost.updatedAt}</time>
            <h1>{lastPost.title}</h1>
            <p>{lastPost.excerpt}</p>
          </div>
        </a>
      </Link>
      <hr />
      <h2>Mais posts</h2>
      <ul className={styles.sectionMorePosts}>
        {allPosts.map(post => (
          <li className={styles.posts} title="How to Add a Double Border to SVG Shapes" key={post.slug}>
            <Link href={`/post/${post.slug}`}>
              <a>
                <img src={post.thumbnail.url} alt={post.thumbnail.alt} />
                <div>
                  <time>{post.updatedAt}</time>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </a>
            </Link>
          </li>

        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const prismic = prismicClient()

  const response = await prismic.query(
    Prismic.Predicates.at('document.type', 'post'),
    {
      pageSize: 7,
      orderings: '[post.date desc]'
    }
  )

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      thumbnail: {
        url: post.data.thumbnail.url,
        alt: post.data.thumbnail.alt,
      },
      title: RichText.asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      content: RichText.asHtml(post.data.content),
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
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
