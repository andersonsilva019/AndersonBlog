'use client'

import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll'

export const ButtonScrollToTopAction = () => {
  return (
    <button onClick={scrollToTop}>
      Voltar para o topo
    </button>
  )
}
