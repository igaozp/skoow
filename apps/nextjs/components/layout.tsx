import styles from './layout.module.css'

// @ts-ignore
export default function Layout({children}) {
    return <div className={styles.container}>{children}</div>
}