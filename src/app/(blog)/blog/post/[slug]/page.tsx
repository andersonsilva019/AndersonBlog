import { PrismicText } from '@prismicio/react'
import styles from './styles.module.scss'
import { SEO } from 'components/SEO'
import Link from 'next/link'
import { MdDateRange, MdKeyboardArrowRight } from 'react-icons/md'
import Image from 'next/image'
import { createClient } from 'services/prismic'
import { TextSlice } from 'components/SlicePost/TextSlice'
import { CodeSlice } from 'components/SlicePost/CodeSlice'
import { ImageSlice } from 'components/SlicePost/ImageSlice'
import { scrollToTop } from 'utils/scrollToTop'
import { ButtonScrollToTopAction } from '../../components/ButtonScrollToTopAction'

const getPost = async (slug: string) => {
  const prismicClient = createClient()

  const response = await prismicClient.getByUID('article', slug, {})

  const postData = {
    slug,
    title: response.data.title[0].text,
    titleRichTextField: response.data.title,
    except: response.data.except[0].text,
    thumbnail: {
      url: response.data?.thumbnail.url,
      alt: response.data?.thumbnail.alt
    },
    body: response.data.body,
    createdAt: new Date(response.first_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }
    )
  }

  return postData
}

export default async function PostPage({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const postData = await getPost(slug)

  const blogContent = postData.body.map(slice => {
    if (slice.slice_type === 'text') {
      return <TextSlice key={slice.id} content={slice.primary.content} />
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
  })

  return (
    <>
      <SEO
        title={postData.title}
        description={postData.except.substring(0, 147).concat('...')}
        imagePost={postData.thumbnail.url}
      />
      <article className={styles.post}>
        <aside className={styles.breadcrumb}>
          <Link href="/blog">Início</Link>
          <MdKeyboardArrowRight size={20} />
          <span>
            <PrismicText field={postData.titleRichTextField} />
          </span>
        </aside>
        <time>
          <MdDateRange color="#FFF" size={20} />
          {postData.createdAt}
        </time>
        <Image
          src={postData.thumbnail.url}
          alt={postData.thumbnail.alt}
          width={760}
          height={400}
          objectFit="cover"
          placeholder="blur"
          blurDataURL="data:LGF5]+Yk^6#M@-5c,1J5@[or[Q6."
        />
        <h1>
          <PrismicText field={postData.titleRichTextField} />
        </h1>
        <div className={styles.content}>{blogContent}</div>
        <ButtonScrollToTopAction />
      </article>
    </>
  )
}
