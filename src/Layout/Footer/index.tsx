import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <h2>Contato</h2>
      <p>
        Estou ansioso para ouvir de você e discutir como posso contribuir para o sucesso do seu projeto.
        Se você tiver alguma dúvida, ideia ou apenas queira trocar algumas palavras sobre desenvolvimento de software,
        fique à vontade para entrar em contato. Estou aqui para ajudar!
      </p>

      <p >andersonnsilva015@gmail.com</p>

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
