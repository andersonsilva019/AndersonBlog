import { RichTextField } from "@prismicio/client/*";
import { GetStaticProps } from "next";
import { prismicClient } from "services/prismic";
import { Home } from "templates/Home";

export type HomeTemplateProps = {
  avatar: {
    url: string
    alt: string
  }
  name: string
  officeName: string
  aboutMe: string
  imageSkills: {
    url: string
    alt: string
  }
  workExperience: {
    company: string
    office_name: string
    period: string
    description: RichTextField
    image: {
      url: string
      alt: string
    }
  }[]
  projects: {
    title: string
    isPublic: boolean
    description: string
    image: {
      url: string
      alt: string
    }
    link: string
  }[]
}

export default function Index(props: HomeTemplateProps) {
  return (
    <Home {...props}/>
  )
}


export const getStaticProps: GetStaticProps<HomeTemplateProps> = async () => {

  const document = await prismicClient.getSingle('portfolio')

  return {
    props: {
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
      }
      )),
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
    },
    revalidate: 60 * 60 * 12 // 12h
  }
}
