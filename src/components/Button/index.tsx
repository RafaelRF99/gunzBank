import styles from './Button.module.scss'

export default function Button({ children }: any) {
    return <button className={styles.btn}>{children}</button>
}
