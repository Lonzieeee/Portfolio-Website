import styles from "./NotFound.module.css"

export const NotFound = () => {
    return <div className={styles.notFound}>
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subtitle}>Page Not Found</h2>
            <a href="/" className={styles.homeLink}>Go Back Home</a>
        </div>
    </div>
}