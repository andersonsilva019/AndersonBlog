import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import Router from 'next/router'
import { Layout } from '../Layout'

import '../styles/global.scss'
import { scrollToTop } from '../utils/scrollToTop'

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    scrollToTop()
  }
}


function MyApp({ Component, pageProps, router }: AppProps) {

  const routeChange = () => {
    // Temporary fix to avoid flash of unstyled content
    // during route transitions. Keep an eye on this
    // issue and remove this code when resolved:
    // https://github.com/vercel/next.js/issues/17464

    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]')
      allStyleElems.forEach((elem) => {
        elem.removeAttribute('media')
      })
    }
    tempFix()
  }

  Router.events.on('routeChangeComplete', routeChange)
  Router.events.on('routeChangeStart', routeChange)

  return (
    <Layout>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={handleExitComplete}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
