import { createClient } from 'services/prismic'
import styles from './styles.module.scss'
import { PrismicRichText } from '@prismicio/react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SEO } from 'components/SEO'

const getPortfolioData = async () => {
  const prismicClient = createClient()

  const document = await prismicClient.getSingle('portfolio')

  return {
    avatar: {
      url: document.data.avatar.url as string,
      alt: document.data.avatar.alt as string
    },
    name: document.data.name[0].text as string,
    officeName: document.data.office_name[0].text as string,
    aboutMe: document.data.about_me[0].text as string,
    imageSkills: {
      url: document.data.skills_image_bg.url as string,
      alt: document.data.skills_image_bg.alt as string
    },
    workExperience: document.data.work_experience.map(item => ({
      company: item.company[0].text as string,
      period: item.period[0].text as string,
      office_name: item.office_name1[0].text as string,
      description: item.description,
      image: {
        url: item.image.url as string,
        alt: item.image.alt as string
      }
    })),
    projects: document.data.projects.map(item => ({
      title: item.project_name[0].text as string,
      isPublic: item.is_public,
      description: item.description[0].text as string,
      image: {
        url: item.image.url as string,
        alt: item.image.alt as string
      },
      link: item.learn_more.url ? item.learn_more.url : ''
    }))
  }
}

export default async function Index() {
  const data = await getPortfolioData()

  console.log({data})

  return (
    <>
      <SEO
        title="Portfolio"
        description="Anderson Silva's portfolio"
        image="/andersonsilva.png"
      />
      <main className={styles.mainContainer}>
        <section className={styles.aboutSection}>
          <div className={styles.photo}>
            <img src={data.avatar.url} alt={data.avatar.alt} />
            <strong>
              Hello! I Am <span>{data.name}.</span>
            </strong>
            <img
              src="/arrow-down-photo.svg"
              alt="Seta que aponta para a foto"
            />
          </div>

          <h2>{data.officeName}</h2>
          {/* <h4>Currently, I'm a Software Engineer at</h4> */}
          <p>{data.aboutMe}</p>

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
            {data.workExperience.map(experience => (
              <li
                key={experience.company}
                className={styles.experienceListItem}
              >
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
            <img src={data.imageSkills.url} alt={data.imageSkills.alt} />
          </div>
        </section>

        <section className={styles.projectsSection}>
          <h2>Projects</h2>

          <ul className={styles.listContainerProjectsSection}>
            {data.projects.map(project => (
              <li
                key={project.title}
                className={styles.listItemProjectsSection}
              >
                <div className={styles.listItemInfoProjectSection}>
                  {!project.isPublic && <span>Private repository</span>}
                  <strong>{project.title}</strong>
                  <div>
                    <p>{project.description}</p>
                  </div>

                  {project.isPublic && (
                    <a href={project.link} target="_blank">
                      Learn more
                    </a>
                  )}
                </div>

                <div className={styles.wrapperImageProjectSection}>
                  <img src={project.image.url} alt={project.image.alt} />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}
