import style from './SearchField.module.css'
import image from '../../../logo.svg'

export const SearchField = () => {
    return (
        <div className={style.input__wrapper}>
            <i className={style.icon} style={{backgroundImage: `url(${image})`}} role="img"/>
            <input className={style.input} type="text" placeholder="hello"/>
        </div>
    )
}