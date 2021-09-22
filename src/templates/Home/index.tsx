import Image from 'next/image'
import Link from 'next/link'
import { MdDateRange } from 'react-icons/md'
import { motion } from "framer-motion"

import { SEO } from 'components/SEO'

import { variantsContainer } from './animations'

import styles from './styles.module.scss'

export type PostProps = {
  slug: string
  thumbnail: {
    url: string
    alt: string
  }
  title: string
  except: string
  createdAt: string
}

export type HomeTemplateProps = {
  lastPost: PostProps
  allPosts: PostProps[]
}


export function Home({ lastPost, allPosts }: HomeTemplateProps) {
  return (
    <>
      <SEO
        title="Home"
        description="Tudo sobre o mundo da programação. Aqui você encontra os melhores conteúdos, dicas e tutoriais para evoluir na sua carreira"
        image='/andersonsilva.png'
      />
      <motion.div
        className={styles.homeContainer}
        variants={variantsContainer}
        initial="pageInitial"
        animate="pageAnimation"
      >
        <h2>Último post</h2>
        <Link href={`/post/${lastPost.slug}`}>
          <a className={styles.lastPost} title={lastPost.title}>
            <Image
              src={lastPost.thumbnail.url}
              alt={lastPost.thumbnail.alt}
              objectFit="cover"
              width={730}
              height={450}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
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
    </>
  )
}
