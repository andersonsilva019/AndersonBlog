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
          <a href="#">
            <FaGithub size={30} color="#FFF" />
          </a>
          <a href="#">
            <FaLinkedin size={30} color="#FFF" />
          </a>
          <a href="#">
            <FaInstagram size={30} color="#FFF" />
          </a>
        </div>
      </div>
    </header>
  )
}
