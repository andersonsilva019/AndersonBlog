import styles from './styles.module.scss'

export function Home() {
  return (
    <main className={styles.mainContainer}>

      <section className={styles.aboutSection}>
        <div className={styles.photo}>
          <img src="/avatar.png" alt="Imagem do rosto de Anderson" />
          <strong>Hello! I Am <span>Anderson Silva.</span></strong>
          <img src="/arrow-down-photo.svg" alt="Seta que aponta para a foto" />
        </div>

        <h2>I'm a Front-end Developer.</h2>
        {/* <h4>Currently, I'm a Software Engineer at</h4> */}
        <p>
          I have over 3 years of experience in Front-End development with React, creating web applications.
          Currently, I am focused on front-end development with React.js
          and Next.js, but I also plan to venture into the back-end development with Node.js and/or Spring Boot.
          I also have academic projects developed with React-Native.
        </p>
      </section>
    </main>
  )
}
