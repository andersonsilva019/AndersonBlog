import { Variants } from 'framer-motion'

export const transition = {
  duration: 0.8,
  ease: [0.43, 0.13, 0.23, 0.96]
}

export const variantsContainer: Variants = {
  pageInitial: { opacity: 0, scale: 0.9, },
  pageAnimation: { opacity: 1, transition, scale: 1 },
}
