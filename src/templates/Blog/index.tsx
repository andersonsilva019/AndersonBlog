import Image from 'next/image'
import Link from 'next/link'
import { MdDateRange } from 'react-icons/md'
import { motion } from 'framer-motion'

import { SEO } from 'components/SEO'

import { variantsContainer } from './animations'

import styles from './styles.module.scss'
import { PrismicText } from '@prismicio/react'
import { RichTextField } from '@prismicio/client/*'

export type PostProps = {
  slug: string
  thumbnail: {
    url: string
    alt: string
  }
  title: string
  except: string
  titleRichTextField: RichTextField
  exceptRichTextField: RichTextField
  createdAt: string
}

export type BlogTemplateProps = {
  lastPost: PostProps
  allPosts: PostProps[]
}

export function Blog({ lastPost, allPosts }: BlogTemplateProps) {
  return (
    <>
      <SEO
        title="Blog"
        description="Tudo sobre o mundo da programação. Aqui você encontra os melhores conteúdos, dicas e tutoriais para evoluir na sua carreira"
        image="/andersonsilva.png"
      />
      <motion.div
        className={styles.blogContainer}
        variants={variantsContainer}
        initial="pageInitial"
        animate="pageAnimation"
      >
        <h2>Último post</h2>
        <Link href={`/blog/post/${lastPost.slug}`} className={styles.lastPost}>
          <Image
            src={lastPost.thumbnail.url}
            alt={lastPost.thumbnail.alt}
            objectFit="cover"
            width={730}
            height={450}
            placeholder="blur"
            blurDataURL="data:LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
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
            <h1>
              <PrismicText field={lastPost.titleRichTextField} />
            </h1>
            <p>
              <PrismicText field={lastPost.exceptRichTextField} />{' '}
            </p>
          </motion.div>
        </Link>
        <hr />
        <h2>Mais posts</h2>
        <ul className={styles.sectionMorePosts}>
          {allPosts.map(post => (
            <li className={styles.posts} key={post.slug}>
              <Link href={`/blog/post/${post.slug}`}>
                <Image
                  src={post.thumbnail.url}
                  alt={post.thumbnail.alt}
                  width={330}
                  height={200}
                  objectFit="cover"
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL="data:LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
                />
                <div>
                  <time>
                    <MdDateRange color="#FFF" size={20} />
                    {post.createdAt}
                  </time>
                  <h3>
                    <PrismicText field={post.titleRichTextField} />
                  </h3>
                  <p>
                    <PrismicText field={post.exceptRichTextField} />{' '}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  )
}
