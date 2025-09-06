'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import { MdDateRange } from 'react-icons/md'
import { PrismicText } from '@prismicio/react'

export const AllPosts = ({ allPosts }: { allPosts: any }) => {
  return (
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
  )
}
