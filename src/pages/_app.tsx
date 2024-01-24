import 'styles/nprogress.scss'
import Router from "next/router";
import nProgress from "nprogress";
import { AppProps } from 'next/app'
import Script from 'next/script'
import { Layout } from '../Layout'

import 'styles/global.scss'

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Script
        id='AdSense Script'
        strategy='beforeInteractive'
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9324248521098640"
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
