import Display from '../Display'
import styles from './Header.module.scss'

interface HeaderProps {
    open: number | undefined
    down: number | undefined
    total: number | undefined
}

export default function Header({ open, down, total }: HeaderProps) {
    return (
        <div className={styles.inform}>
            <header className={styles.container}>
                GunzBank
                <div className={styles.display}>
                    <Display name="Entrada" icon="up" price={open ? open : 0} />
                    <Display name="Saída" icon="down" price={down ? down : 0} />
                    <Display
                        name="Total"
                        icon="total"
                        price={total ? total : 0}
                    />
                </div>
            </header>
        </div>
    )
}
