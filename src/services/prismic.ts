import {
  createClient as baseCreateClient,
  type ClientConfig
} from '@prismicio/client'

export const repositoryName = process.env.PRISMIC_REPOSITORY_NAME || ''

export function createClient(config: ClientConfig = {}) {
  const client = baseCreateClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetch: (url, options) =>
      fetch(url, {
        ...options,
        // opções específicas para Next.js
        next:
          process.env.NODE_ENV === 'production'
            ? { tags: ['prismic'] }
            : { revalidate: 5 }
      }),
    ...config
  })

  return client
}
