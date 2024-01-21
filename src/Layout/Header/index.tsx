import Link from 'next/link'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainerMobile}>
      <div className={styles.headerWrapper}>
        <Link href="/">
          <a>
            <img src="/logo-desktop.svg" alt="Logo <AS/>" />
            <img src="/logo-mobile.svg" alt="Logo <AS/>" />
          </a>
        </Link>
        <nav>
          <Link href="/">
            <a>Portfolio</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
