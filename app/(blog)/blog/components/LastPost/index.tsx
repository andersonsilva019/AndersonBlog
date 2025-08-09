'use client'

import { PrismicText } from "@prismicio/react"
import { MdDateRange } from "react-icons/md"
import Link from 'next/link'
import Image from "next/image"
import { motion } from 'framer-motion'
import styles from './styles.module.scss'

export const LastPost = ({ lastPost }: {lastPost: any}) => {
  return (
    <>
      <h2>Último post</h2>
      <Link
        href={`/blog/post/${lastPost?.slug}`}
        className={styles.lastPost}
      >
        <Image
          src={lastPost?.thumbnail.url}
          alt={lastPost?.thumbnail.alt}
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
            {lastPost?.createdAt}
          </time>
          <h1>
            <PrismicText field={lastPost?.titleRichTextField} />
          </h1>
          <p>
            <PrismicText field={lastPost?.exceptRichTextField} />{' '}
          </p>
        </motion.div>
      </Link>
    </>
  )
}
