import { ReactNode } from 'react'

import { Footer } from './Footer'
import { Header } from './Header'
import styles from './styles.module.scss'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className={styles.layoutContainer}>
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}
