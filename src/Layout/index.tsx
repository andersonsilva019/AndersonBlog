import { ReactNode } from 'react'
import { Router } from 'next/dist/client/router'
import { AnimatePresence, motion, Variants } from 'framer-motion'

import { Footer } from './Footer'
import { Header } from './Header'
import styles from './styles.module.scss'

type LayoutProps = {
  children: ReactNode
  router: Router
}

const variants: Variants = {
  pageInitial: {
    opacity: 0
  },
  pageAnimation: {
    opacity: 1,
  },
  pageExit: {
    opacity: 0,
  }
}

export function Layout({ children, router }: LayoutProps) {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.layoutContainer}
        key={router.route}
        variants={variants}
        initial="pageInitial"
        animate="pageAnimation"
        exit="pageExit"
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}
