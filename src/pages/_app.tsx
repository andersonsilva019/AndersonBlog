import { AppProps } from 'next/app'
import { Layout } from '../Layout'
import '../styles/global.scss'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
