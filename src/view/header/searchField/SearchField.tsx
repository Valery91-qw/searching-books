import style from './SearchField.module.css'
import image from '../../../logo.svg'

export const SearchField = () => {
    return (
        <div className={style.input__wrapper}>
            <input className={style.input} type="text" placeholder="hello"/>
            <img className={style.icon} style={{backgroundImage: `url(${image})`}} />
        </div>
    )
}