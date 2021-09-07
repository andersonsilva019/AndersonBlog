import Image from 'next/image'
import styles from './styles.module.scss'

export type ImageSliceProps = {
  src: string
  alt: string
}

export function ImageSlice({ src, alt }: ImageSliceProps) {
  return (
    <div className={styles.imageSliceContainer}>
      <Image
        src={src}
        alt={alt}
        width={560}
        height={400}
        objectFit="contain"
      />
    </div>
  )
}
