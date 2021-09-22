import '../styles/nprogress.scss'
import Router from "next/router";
import nProgress from "nprogress";
import { AppProps } from 'next/app'
import { Layout } from '../Layout'

import '../styles/global.scss'

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
