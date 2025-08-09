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

}
