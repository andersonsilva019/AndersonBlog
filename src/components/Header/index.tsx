import Link from 'next/link'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainerMobile}>
      <div className={styles.headerWrapper}>
        <Link href="/">
            <img src="/logo-desktop.svg" alt="Logo <AS/>" />
            <img src="/logo-mobile.svg" alt="Logo <AS/>" />
        </Link>
        <nav>
          <Link href="/">
            Portfolio
          </Link>
          <Link href="/blog">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
