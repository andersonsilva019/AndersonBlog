'use client'

import React from 'react'
import Head from 'next/head'
import { usePathname, useRouter } from 'next/navigation'

type SEOProps = {
  title: string
  description?: string
  image?: string
  imagePost?: string
  children?: React.ReactNode
}

const favicon = '/favicon.png'

export const SEO = ({
  title,
  description,
  image = '',
  imagePost = ''
}: SEOProps) => {

  const pathname = usePathname()

  return (
  <Head>
    {/* DEFAULT */}

    {title != undefined && <title key="title">{title} | Anderson Silva</title>}
    {description != undefined && (
      <meta name="description" key="description" content={description} />
    )}
    <link rel="icon" type="image/x-icon" href={favicon} />
    <link rel="apple-touch-icon" href={favicon} />

    {/* OPEN GRAPH */}
    <meta property="og:type" key="og:type" content="website" />
    <meta
      property="og:url"
      key="og:url"
      content={`https://personnel-blog.vercel.app${pathname}`}
    />
    {title != undefined && (
      <meta property="og:title" content={title} key="og:title" />
    )}
    {description != undefined && (
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
    )}
    {image != undefined && (
      <meta
        property="og:image"
        key="og:image"
        content={`https://personnel-blog.vercel.app${image}`}
      />
    )}

    {imagePost != undefined && (
      <meta property="og:image" key="og:image" content={imagePost} />
    )}

    {/* TWITTER */}
    <meta
      name="twitter:card"
      key="twitter:card"
      content="summary_large_image"
    />
    <meta name="twitter:site" key="twitter:site" />
    <meta name="twitter:creator" key="twitter:creator" />
    {title != undefined && (
      <meta name="twitter:title" key="twitter:title" content={title} />
    )}
    {description != undefined && (
      <meta
        name="twitter:description"
        key="twitter:description"
        content={description}
      />
    )}
    {image != undefined && (
      <meta
        name="twitter:image"
        key="twitter:image"
        content={`https://personnel-blog.vercel.app${image}`}
      />
    )}

  </Head>
)
}
