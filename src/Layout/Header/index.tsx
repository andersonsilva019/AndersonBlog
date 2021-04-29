import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import styles from './styles.module.scss'

/**
 * 425px -> Mobile
 * 768px -> Tablet
 * 1024px -> Desktop
 */

export function Header() {
  return (
    <header className={styles.headerContainerMobile}>
      <div>
        <img src="/logo-desktop.svg" alt="Logo <AS/>" />
        <img src="/logo-mobile.svg" alt="Logo <AS/>" />
        <div className={styles.socialIconsMobile}>
          <a href="https://github.com/andersonsilva019/">
            <FaGithub size={30} color="#FFF" />
          </a>
          <a href="https://www.linkedin.com/in/anderson-silva-3a3883188/">
            <FaLinkedin size={30} color="#FFF" />
          </a>
          <a href="https://www.instagram.com/andersonsilva_0019/">
            <FaInstagram size={30} color="#FFF" />
          </a>
        </div>
      </div>
    </header>
  )
}
