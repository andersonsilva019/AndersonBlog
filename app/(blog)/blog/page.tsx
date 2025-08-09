import { SEO } from 'components/SEO'
import { createClient } from 'services/prismic'
import { motion } from 'framer-motion'
import { variantsContainer } from 'templates/Blog/animations'
import styles from './styles.module.scss'
import { LastPost } from './components/LastPost'
import { AllPosts } from './components/AllPosts'

const getPosts = async () => {
  const prismicClient = createClient()

  const response = await prismicClient.getAllByType('article', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc'
    }
  })

  const posts = response.map(post => {
    return {
      slug: post.uid,
      thumbnail: {
        url: post.data?.thumbnail.url,
        alt: post.data?.thumbnail.alt
      },
      title: post.data.title[0].text,
      except: post.data.except[0].text,
      titleRichTextField: post.data.title,
      exceptRichTextField: post.data.except,
      body: post.data?.body,
      createdAt: new Date(post.first_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }
      )
    }
  })

  const lastPost = posts.shift()
  const allPosts = [...posts]

  return {
    lastPost,
    allPosts
  }
}

export default async function BlogPage() {
  const data = await getPosts()

  console.log({ data })

  return (
    <>
      <SEO
        title="Blog"
        description="Tudo sobre o mundo da programação. Aqui você encontra os melhores conteúdos, dicas e tutoriais para evoluir na sua carreira"
        image="/andersonsilva.png"
      />
      <div className={styles.blogContainer}>
        <LastPost lastPost={data.lastPost} />
        <hr />
        <h2>Mais posts</h2>
        <AllPosts allPosts={data.allPosts} />
      </div>
    </>
  )
}
