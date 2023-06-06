'use client'
import styles from './Layout.module.scss'
import Header from '@/components/Header'
import SendValue from '@/components/SendValue'
import Post from './Post'
import Button from '../Button'
// HOOKS
import { useEffect, useState } from 'react'

interface ReleasesProps {
    date: string
    category: string
    description: string
    price: number | undefined
}

export default function Layout() {
    const [date, setDate] = useState('')
    const [category, setCategory] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [price, setPrice] = useState<number | undefined>()
    const [releases, setReleases] = useState<ReleasesProps[]>([])

    const [moneyArray, setMoneyArray] = useState<number[]>([])
    const [displayUp, setDisplayUp] = useState<number>()

    const [exitArray, setExitArray] = useState<number[]>([])
    const [displayDown, setDisplayDown] = useState<number>()
    const [total, setTotal] = useState<number>()

    function convert() {
        if (displayUp && displayDown && displayUp > displayDown) {
            let soma = +displayUp - -displayDown
            return setTotal(soma)
        }
        if (displayUp && displayDown && displayUp < displayDown) {
            let sub = +displayDown - -displayUp
            return setTotal(sub)
        }
    }

    function calcUp() {
        let total = 0
        for (let i = 0; i < moneyArray.length; i++) {
            total = +moneyArray[i] + +total
        }
        setDisplayUp(+total)
    }

    function calcDown() {
        let total = 0
        for (let i = 0; i < exitArray.length; i++) {
            total = -exitArray[i] - -total
        }
        setDisplayDown(+total)
    }

    function handleReleases() {
        if (releases.length > 0) {
            return releases.map((launch, i) => {
                return (
                    <div key={i}>
                        <Post inform={launch} />
                    </div>
                )
            })
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const launch = {
            date,
            category,
            description,
            price,
        }
        setReleases((prevLaunch) => [...prevLaunch, launch])
        setDate('')
        setCategory('')
        setDescription('')
        setPrice(undefined)
        if (category === 'ganho') {
            setMoneyArray(price ? [...moneyArray, price] : [])
        } else if (category === 'gasto') {
            setExitArray(price ? [...exitArray, price] : [])
        }
    }

    useEffect(() => {
        calcUp()
        calcDown()
    }, [price])

    useEffect(() => {
        convert()
    }, [displayUp, displayDown])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header open={displayUp} down={displayDown} total={total} />
            </div>
            <form onSubmit={handleSubmit} className={styles.value}>
                <SendValue
                    value={{ date, category, description, price }}
                    set={{ setDate, setCategory, setDescription, setPrice }}
                />
                <div className={styles.btn}>
                    {date && category && description && price ? (
                        <Button>Lançar</Button>
                    ) : (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '180px',
                                height: '40px',
                                backgroundColor: '#0005',
                                padding: '1rem',
                                margin: '1rem',
                                borderRadius: '2px',
                                userSelect: 'none',
                            }}
                        >
                            Falta informações
                        </div>
                    )}
                </div>
            </form>
            <div className={styles.post}>{handleReleases()}</div>
        </div>
    )
}
