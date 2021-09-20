import React from 'react'
import Head from 'next/head'
import { NextRouter, withRouter } from 'next/router'

type SEOProps = {
  title: string
  description?: string
  image?: string
  imagePost?: string
  router: NextRouter
  children?: React.ReactNode
}

const favicon = '/favicon.png'

export const SEO = withRouter(
  ({ title, description, image = '', router, children, imagePost = '' }: SEOProps) => (
    <Head>
      {/* DEFAULT */}

      {title != undefined && (
        <title key="title">{title} | Anderson Silva</title>
      )}
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
        content={`https://andersonnsilva.site${router.pathname}`}
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
          content={`https://andersonnsilva.site${image}`}
        />
      )}

      {imagePost != undefined && (
        <meta
          property="og:image"
          key="og:image"
          content={imagePost}
        />
      )}

      {/* TWITTER */}
      <meta
        name="twitter:card"
        key="twitter:card"
        content="summary_large_image"
      />
      <meta name="twitter:site" key="twitter:site" content="@tannerlinsley" />
      <meta
        name="twitter:creator"
        key="twitter:creator"
        content="@tannerlinsley"
      />
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
          content={`https://andersonnsilva.site${image}`}
        />
      )}

      {children}
    </Head>
  )
)
