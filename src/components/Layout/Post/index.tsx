import styles from './Post.module.scss'

interface PostProps {
    inform: {
        date: any
        category: any
        description: any
        price: any
    }
}

export default function Post(props: PostProps) {
    const informs = props.inform
    return (
        <div className={styles.container}>
            <ul>
                <li>{informs.date}</li>
                <li>{informs.category}</li>
                <li className={styles.description}>{informs.description}</li>
                <li>{informs.price}</li>
            </ul>
        </div>
    )
}
