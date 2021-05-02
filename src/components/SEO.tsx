import Head from 'next/head'

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  shouldIndexPage?: boolean;
}


const API_URL = process.env.NODE_ENV === 'production' ? 'https://personnel-blog.vercel.app/' : 'http://localhost:3000'

export default function SEO({
  title,
  description,
  image,
  shouldIndexPage = true
}: SEOProps) {

  const pageTitle = `${title} | AndersonSilva`
  const pageImage = image ? `${API_URL}/${image}` : null

  return (
    <Head>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      {pageImage && <meta name="image" content={pageImage} />}
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
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="320" />
      <meta property="og:image:height" content="200" />

    </Head>
  )
}
