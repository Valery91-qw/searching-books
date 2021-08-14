import style from './SearchField.module.css'
import {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../../bll/search/search-actions";
import {RootReducerType} from "../../../bll/store";

export const SearchField = () => {

    const searchValue = useSelector<RootReducerType, string>(state => state.search.searchValue)
    const dispatch = useDispatch()

    const handleSetSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValue(event.currentTarget.value))
    }

    return (
        <div className={style.input__wrapper}>
            <input className={style.input} type="text" placeholder="Search" onChange={handleSetSearchValue} value={searchValue}/>
            <button className={style.button}>
            <img alt="search_icon" className={style.icon}
                 src={"https://listimg.pinclipart.com/picdir/s/109-1093260_search-loop-svg-png-icon-free-download-524293.png"}/>
            </button>
        </div>
    )
}