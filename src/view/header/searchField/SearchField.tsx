import style from './SearchField.module.css'


export const SearchField = () => {
    return (
        <div className={style.wrapper}>
            <i role="img" />
            <input type="text" placeholder="hello"/>
        </div>
    )
}