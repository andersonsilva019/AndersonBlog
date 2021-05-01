import Image from 'next/image'
import styles from './styles.module.scss'

export function ImageSlice({ slice }) {
  return (
    <div className={styles.imageSliceContainer}>
      <Image
        src={slice.primary.image_field.url}
        alt={slice.primary.image_field.alt}
        width={560}
        height={400}
        objectFit="contain"
      />
    </div>
  )
}
