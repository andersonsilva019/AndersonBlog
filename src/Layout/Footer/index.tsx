import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <h2>Contact</h2>
      <p>
        If you have any questions, ideas, or
        just want to exchange a few words about software development,
        feel free to reach out. I'm here to help!
      </p>

      <p>andersonnsilva015@gmail.com</p>

      <div className={styles.socialIconsMobile}>
        <a href="https://github.com/andersonsilva019/">
          <FaGithub size={30} color="#FFF" />
        </a>
        <a href="https://www.linkedin.com/in/anderson-silva-3a3883188/">
          <FaLinkedin size={30} color="#FFF" />
        </a>
        <a href="https://www.instagram.com/andersonn.silvaa_/">
          <FaInstagram size={30} color="#FFF" />
        </a>
      </div>
    </footer>
  )
}
