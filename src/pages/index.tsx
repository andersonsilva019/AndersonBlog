import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MdDateRange } from 'react-icons/md'
import { RichText } from 'prismic-reactjs'
import Prismic from '@prismicio/client'
import { motion, Variants } from "framer-motion"

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
  except: string
  content: string
  createdAt: string
  description: string
}

type HomeProps = {
  lastPost: Post
  allPosts: Post[]
}

const transition = { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }

const variants: Variants = {
  pageInitial: { opacity: 0, scale: 0.8, },
  pageAnimation: { opacity: 1, transition, scale: 1 },
  pageExit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.5, ...transition },
  }
}

export default function Home({ lastPost, allPosts }: HomeProps) {
  return (
    <motion.div
      className={styles.homeContainer}
      variants={variants}
      initial="pageInitial"
      animate="pageAnimation"
      exit="pageExit"
    >
      <SEO title="Home" description="Tudo sobre o mundo da programação" />
      <h2>Último post</h2>
      <Link href={`/post/${lastPost.slug}`}>
        <a className={styles.lastPost} title={lastPost.title}>
          {/* <motion.figure
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          > */}
          <Image
            src={lastPost.thumbnail.url}
            alt={lastPost.thumbnail.alt}
            objectFit="cover"
            width={730}
            height={450}
          />
          {/* </motion.figure> */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            // transition={{ delay: 0.8 }}
            className={styles.wrapperInfolastPost}
          >
            <time>
              <MdDateRange color="#FFF" size={20} />
              {lastPost.createdAt}
            </time>
            <h1>{lastPost.title}</h1>
            <p>{lastPost.except}</p>
          </motion.div>
        </a>
      </Link>
      <hr />
      <h2>Mais posts</h2>
      <ul className={styles.sectionMorePosts}>
        {allPosts.map(post => (
          <li className={styles.posts} title={post.title} key={post.slug}>
            <Link href={`/post/${post.slug}`}>
              <a>
                <Image
                  src={post.thumbnail.url}
                  alt={post.thumbnail.alt}
                  width={330}
                  height={200}
                  objectFit="cover"
                  layout="responsive"
                />
                <div>
                  <time>
                    <MdDateRange color="#FFF" size={20} />
                    {post.createdAt}
                  </time>
                  <h3>{post.title}</h3>
                  <p>{post.except}</p>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const prismic = prismicClient()

  const response = await prismic.query(
    Prismic.Predicates.at('document.type', 'article'),
    {
      pageSize: 7,
      orderings: '[article.date desc]'
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
