import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import styles from './styles.module.scss'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
