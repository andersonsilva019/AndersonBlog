
import styles from './layout.module.scss'

import '../styles/global.scss'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <link
          rel="canonical"
          href="https://personnel-blog.vercel.app/"
          key="canonical"
        />
      </head>
      <body>
        <Header />
        <main className={styles.layoutContainer}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
