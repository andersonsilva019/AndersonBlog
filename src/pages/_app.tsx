import { AppProps } from 'next/app'
import Head from 'next/head'
import { Layout } from '../Layout'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <script data-ad-client="ca-pub-9324248521098640" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
