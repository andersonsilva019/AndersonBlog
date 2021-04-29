import Prismic from '@prismicio/client'
export function prismicClient(req?: unknown) {
  const prismic = Prismic.client(
    process.env.PRISMIC_ENDPOINT,
    { req }
  )
  return prismic
}
