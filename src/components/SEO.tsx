import Head from 'next/head'

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  type?: string
  shouldIndexPage?: boolean;
}

export default function SEO({
  title,
  description,
  image,
  type = 'website',
  shouldIndexPage = true
}: SEOProps) {

  const pageTitle = `${title} | Anderson Silva`

  return (
    <Head>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={image} />}
      {!shouldIndexPage && <meta name="robots" content="index,follow,max-image-preview:large" />}

      <meta name="keywords" content="nextjs, typescript, javascript, node, react"></meta>
      <meta name="author" content="Anderson Silva" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#121214" />
      <meta name="msapplication-TileColor" content="#121214" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:url" content={image} />}
      <meta property="og:locale" content="pt-BR" />
      {type && <meta property="og:type" content={type} />}
      {type === 'article' ? <meta property="article:author" content="Anderson Silva" /> : ''}

      <meta property="og:site_name" content="AndersonSilva" />
      {image && <meta key={`og:image:${image}`} property="og:image" content={image} />}
      <meta property="og:image:width" content="0" />
      <meta property="og:image:height" content="0" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}

    </Head>
  )
}
