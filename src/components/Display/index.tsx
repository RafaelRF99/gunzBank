import styles from './Display.module.scss'
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { CgMathEqual } from 'react-icons/cg'

interface DisplayProps {
    name: string
    price: number
    icon: string
}

export default function Display({ name, price, icon }: DisplayProps) {
    const color = price >= 0 ? styles.pricePos : styles.priceNeg

    function iconGenerator() {
        if (icon === 'up') {
            return <BsArrowUpCircle size={27} />
        }
        if (icon === 'down') {
            return <BsArrowDownCircle size={27} />
        }
        if (icon === 'total') {
            return <CgMathEqual size={27} />
        } else {
            return ''
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.inline}>
                <h2 className={styles.title}>{name}</h2>
                {iconGenerator()}
            </div>
            <div className={`${styles.price} ${color}`}>R${price}</div>
        </div>
    )
}
