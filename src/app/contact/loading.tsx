import styles from './page.module.css'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={styles.loading}>
      <h1>carregando...</h1>
    </div>
  )
}
