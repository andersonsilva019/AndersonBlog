import { MdDateRange } from 'react-icons/md'
import { motion } from "framer-motion"
import Link from "next/link";
import Image from 'next/image'
import { MdKeyboardArrowRight } from 'react-icons/md'

import { SEO } from "components/SEO"
import { CodeSlice } from 'components/SlicePost/CodeSlice'
import { ImageSlice } from 'components/SlicePost/ImageSlice'
import { TextSlice } from 'components/SlicePost/TextSlice'
import { scrollToTop } from "utils/scrollToTop";

import { variants } from "./animation";

import styles from './styles.module.scss'
import { PrismicText } from "@prismicio/react";
import type { RichTextField } from "@prismicio/client";

export type SliceText = {
  id: string
  slice_type: 'text'
  primary: {
    content: RichTextField
  }
}

export type SliceCode = {
  id: string
  slice_type: 'code'
  primary: {
    code_field: RichTextField
    language: string
  }
}

export type SliceImage = {
  id: string
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
  titleRichTextField: RichTextField
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

  const blogContent = post.body.map(slice => {
    if (slice.slice_type === "text") {
      return (
        <TextSlice
          key={slice.id}
          content={slice.primary.content}
        />
      )
    } else if (slice.slice_type === 'code') {
      return (
        <CodeSlice
          key={slice.id}
          language={slice.primary.language}
          content={slice.primary.code_field}
        />
      )
    } else if (slice.slice_type === 'image') {
      return (
        <ImageSlice
          key={slice.id}
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
        description={post.except.substring(0, 147).concat('...')}
        imagePost={post.thumbnail.url}
      />
      <aside className={styles.breadcrumb}>
        <Link href="/blog">
          Início
        </Link>
        <MdKeyboardArrowRight size={20} />
        <span><PrismicText field={post.titleRichTextField} /></span>
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
        placeholder="blur"
        blurDataURL="data:LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
      />
      <h1><PrismicText field={post.titleRichTextField} /></h1>
      <div className={styles.content}>
        {blogContent}
      </div>
      <button type="button" onClick={scrollToTop}>
        Voltar para o topo
      </button>
    </motion.article>
  )
}
