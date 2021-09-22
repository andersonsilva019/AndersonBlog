import { useEffect } from "react";
import { MdDateRange } from 'react-icons/md'
import { motion } from "framer-motion"
import Link from "next/link";
import Image from 'next/image'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RichTextBlock } from 'prismic-reactjs'


import { SEO } from "components/SEO"
import { CodeSlice } from 'components/SlicePost/CodeSlice'
import { ImageSlice } from 'components/SlicePost/ImageSlice'
import { TextSlice } from 'components/SlicePost/TextSlice'
import { scrollToTop } from "utils/scrollToTop";

import { variants } from "./animation";

import styles from './styles.module.scss'

export type SliceText = {
  slice_type: 'text'
  primary: {
    content: RichTextBlock[]
  }
}

export type SliceCode = {
  slice_type: 'code'
  primary: {
    code_field: RichTextBlock[]
    language: string
  }
}

export type SliceImage = {
  slice_type: 'image'
  primary: {
    image_field: {
      url: string
      alt: string
    }
  }
}
type Post = {
  title: string
  except: string
  thumbnail: {
    alt: string
    url: string
  }
  createdAt: string
  body: Array<SliceText | SliceCode | SliceImage>
}

export type PostTemplateProps = {
  post: Post
}

export function Post({ post }: PostTemplateProps) {

  useEffect(() => {
    if (window !== undefined) {
      // @ts-ignore
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, [])

  const blogContent = post.body.map((slice, index) => {
    if (slice.slice_type === "text") {
      return (
        <TextSlice
          key={index}
          content={slice.primary.content}
        />
      )
    } else if (slice.slice_type === 'code') {
      return (
        <CodeSlice
          key={index}
          language={slice.primary.language}
          content={slice.primary.code_field}
        />
      )
    } else if (slice.slice_type === 'image') {
      return (
        <ImageSlice
          key={slice.primary.image_field.url}
          src={slice.primary.image_field.url}
          alt={slice.primary.image_field.alt}
        />
      )
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
        imagePost={post.thumbnail.url}
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
      <ins className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-9324248521098640"
        data-ad-slot="5813896120">
      </ins>
      <Image
        src={post.thumbnail.url}
        alt={post.thumbnail.alt}
        width={760}
        height={400}
        objectFit="cover"
        placeholder="blur"
        blurDataURL="data:LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
      />
      <h1>{post.title}</h1>
      <div className={styles.content}>
        {blogContent}
      </div>
      <button type="button" onClick={scrollToTop}>
        Voltar para o topo
      </button>
    </motion.article>
  )
}