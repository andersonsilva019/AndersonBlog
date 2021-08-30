import Head from 'next/head'

interface SEOProps {
  title: string
  description?: string
  image?: string
  shouldExcludeTitleSuffix?: boolean
  type?: string
  shouldIndexPage?: boolean
}

export default function SEO({
  title,
  description,
  image,
  type = 'website',
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true
}: SEOProps) {
  const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? '| Anderson Silva' : ''}`

  return (
    <Head>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      {!shouldIndexPage && <meta name="robots" content="index,follow" />}

      <meta name="keywords" content="nextjs, typescript, javascript, node, react"></meta>
      <meta name="author" content="Anderson Silva" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta property="og:title" content={pageTitle} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta key="og:url" property="og:url" content={image} />}
      <meta property="og:locale" content="pt-BR" />
      {type && <meta property="og:type" content={type} />}
      {type === 'article' && <meta property="article:author" content="Anderson Silva" />}

      <meta property="og:site_name" content="AndersonSilva" />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </Head>
  )
}
