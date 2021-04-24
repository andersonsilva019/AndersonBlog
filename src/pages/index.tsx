import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h2>Último post</h2>
      <a className={styles.lastPost} href="https://www.google.com.br">
        <img src="/post.png" alt="Post" />
        <div className={styles.wrapperInfolastPost}>
          <span>Abril 27, 2021</span>
          <h1>How to Add a Double Border to SVG Shapes</h1>
          <p>
            box-shadow only needs one line of CSS,
            but we have to make sure that each shape
            has its own SVG as we can’t apply box-shadow
            directly to the shapes. Another thing to
            consider is that we have to apply the color of
            the background in the declaration.box-shadow only needs one line of CSS,
            but we have to make sure that each shape
            has its own SVG as we can’t apply box-shadow
            directly to the shapes. Another thing to
            consider is that we have to apply the color of
            the background in the declaration.box-shadow only needs one line of CSS,
            but we have to make sure that each shape
            has its own SVG as we can’t apply box-shadow
            directly to the shapes. Another thing to
            consider is that we have to apply the color of
            the background in the declaration.
          </p>
        </div>
      </a>
    </div>
  )
}
