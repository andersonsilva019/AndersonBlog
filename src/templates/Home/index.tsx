import { HomeTemplateProps } from 'pages'
import styles from './styles.module.scss'
import { PrismicRichText } from '@prismicio/react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export function Home(props: HomeTemplateProps) {
  return (
    <main className={styles.mainContainer}>

      <section className={styles.aboutSection}>
        <div className={styles.photo}>
          <img src={props.avatar.url} alt={props.avatar.alt} />
          <strong>Hello! I Am <span>{props.name}.</span></strong>
          <img src="/arrow-down-photo.svg" alt="Seta que aponta para a foto" />
        </div>

        <h2>{props.officeName}</h2>
        {/* <h4>Currently, I'm a Software Engineer at</h4> */}
        <p>{props.aboutMe}</p>

        <div className={styles.socialIcons}>
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
      </section>

      <section className={styles.experienceSection}>
        <h2>Work experience</h2>

        <ul className={styles.experienceListContainer}>
          {props.workExperience.map(experience => (
            <li key={experience.company} className={styles.experienceListItem}>
              <img src={experience.image.url} alt={experience.image.alt} />
              <div>
                <span>{experience.period}</span>
                <strong>{experience.company}</strong>
                <p>{experience.office_name}</p>

                <ul className={styles.experienceListActivity}>
                  <PrismicRichText field={experience.description} />
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.skillsSection}>
        <div>
          <img src={props.imageSkills.url} alt={props.imageSkills.alt} />
        </div>
      </section>

      <section className={styles.projectsSection}>
        <h2>Projects</h2>

        <ul className={styles.listContainerProjectsSection}>
          {props.projects.map(project => (
            <li key={project.title} className={styles.listItemProjectsSection}>
              <div className={styles.listItemInfoProjectSection}>
                {!project.isPublic && (<span>Private repository</span>)}
                <strong>{project.title}</strong>
                <div>
                  <p>{project.description}</p>
                </div>

                {project.isPublic && <a href={project.link} target='_blank'>Learn more</a>}
              </div>

              <div className={styles.wrapperImageProjectSection}>
                <img src={project.image.url} alt={project.image.alt} />
              </div>
            </li>
          ))}

        </ul>
      </section>
    </main>
  )
}
