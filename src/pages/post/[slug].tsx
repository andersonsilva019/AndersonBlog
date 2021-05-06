import { GetStaticPaths, GetStaticProps } from "next"
import { MdDateRange } from 'react-icons/md'
import { motion, Variants } from "framer-motion"
import Link from "next/link";
import Image from 'next/image'

import { MdKeyboardArrowRight } from 'react-icons/md'
import { RichText } from 'prismic-reactjs'

import { prismicClient } from "../../services/prismic"
import SEO from "../../components/SEO"

import { TextSlice, ImageSlice, CodeSlice } from '../../components/SlicePost'
import { scrollToTop } from "../../utils/scrollToTop";

import styles from './styles.module.scss'

const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }

const variants: Variants = {
  pageInitial1: { opacity: 0, scale: 0.9, },
  pageAnimation1: { opacity: 1, transition, scale: 1 },
}

export default function Post({ post }) {
  const blogContent = post.body.map((slice, index) => {
    if (slice.slice_type === "text") {
      return <TextSlice slice={slice} key={index} />;
    } else if (slice.slice_type === 'code') {
      return <CodeSlice language={slice.primary.language} content={slice.primary.code_field} key={index} />;
    } else if (slice.slice_type === 'image') {
      return <ImageSlice slice={slice} />
    } else {
      return null
    }
  });



  return (
    <motion.article
      className={styles.post}
      variants={variants}
      initial="pageInitial1"
      animate="pageAnimation1"
    >
      <SEO
        title={post.title}
        description={post.except.substring(150, 0)}
        image={post.thumbnail.url}
      />
      <aside className={styles.breadcrumb}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <MdKeyboardArrowRight size={20} />
        <span>{post.title}</span>
      </aside>
      <time>
        <MdDateRange color="#FFF" size={20} />
        {post.createdAt}
      </time>
      <Image
        src={post.thumbnail.url}
        alt={post.thumbnail.alt}
        width={760}
        height={400}
        objectFit="cover"
      />
      <h1>{post.title}</h1>
      <div className={styles.content}>
        {blogContent}
      </div>
      <button type="button" onClick={scrollToTop}>
        Voltar para o topo
      </button>
    </motion.article >
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
