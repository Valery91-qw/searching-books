import style from './SearchField.module.css'

export const SearchField = () => {
    return (
        <div className={style.input__wrapper}>
            <input className={style.input} type="text" placeholder="Search"/>
            <button className={style.button}>
            <img alt="search_icon" className={style.icon}
                 src={"https://listimg.pinclipart.com/picdir/s/109-1093260_search-loop-svg-png-icon-free-download-524293.png"}/>
            </button>
        </div>
    )
}