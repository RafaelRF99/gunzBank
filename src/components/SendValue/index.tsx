import DropDown from '../DropDown'
import styles from './SendValue.module.scss'

interface SendValueProps {
    set: {
        setDate?: any
        setCategory?: any
        setDescription?: any
        setPrice?: any
    }
    value: {
        date?: any
        category?: any
        description?: any
        price?: any
    }
}

export default function SendValue(props: SendValueProps) {
    const typeInput = [
        {
            name: 'Data',
            type: 'date',
            class: styles.data,
            value: props.value.date,
            onChange: props.set.setDate,
        },
        {
            name: 'Categoria',
            type: 'string',
            class: styles.category,
            value: props.value.category,
            onChange: props.set.setCategory,
        },
        {
            name: 'Descrição',
            type: 'string',
            class: styles.description,
            value: props.value.description,
            onChange: props.set.setDescription,
        },
        {
            name: 'Valor',
            type: 'number',
            class: styles.price,
            value: props.value.price,
            onChange: props.set.setPrice,
        },
    ]

    function renderInput() {
        return typeInput.map((input, i) => {
            return (
                <div className={styles.render} key={i}>
                    <label htmlFor={input.name}>{input.name}</label>
                    <input
                        placeholder={
                            input.name === 'Categoria' ? 'ganho ou gasto' : ''
                        }
                        className={input.class}
                        type={input.type}
                        value={input.value || ''}
                        onChange={(e) => input.onChange(e.target.value)}
                    />
                </div>
            )
        })
    }

    return <div className={styles.container}>{renderInput()}</div>
}
