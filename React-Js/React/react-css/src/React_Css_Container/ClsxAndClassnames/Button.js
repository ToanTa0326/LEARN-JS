import style from './Button.module.scss'
import clsx from 'clsx'

export default function Button({active, primary}) {

    const classnames = clsx(style.btn, {
        [style.active]: active,
        [style.primary]: primary
    })

    return (
        <button
            className={classnames}
        >
            CLick Me!
        </button>
    )
}
