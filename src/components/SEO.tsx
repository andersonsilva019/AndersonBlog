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

  const pageTitle = `${title} | AndersonSilva`

  return (
    <Head>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={image} />}
      {!shouldIndexPage && <meta name="robots" content="noindex/nofollow" />}

      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#121214" />
      <meta name="msapplication-TileColor" content="#121214" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://personnel-blog.vercel.app/" />
      <meta property="og:locale" content="pt-BR" />
      {type && <meta property="og:type" content={type} />}

      <meta property="og:site_name" content="andersonSilva" />
      <meta property="og:image" content={image} />
      {/* <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />*/}
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

    </Head>
  )
}
