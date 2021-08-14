import style from './SearchField.module.css'
import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../../bll/search/search-actions";
import {RootReducerType} from "../../../bll/store";
import {getBooks} from "../../../bll/books/books-actions";

export const SearchField = () => {

    const searchValue = useSelector<RootReducerType, string>(state => state.search.searchValue)
    const dispatch = useDispatch()

    const handleSetSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValue(event.currentTarget.value))
    }

    const handlePressButton = (event: any) => {
       if(event.key === 'Enter' || event.type === 'click') {
            dispatch(getBooks())
       }
    }

    return (
        <div className={style.input__wrapper}>
            <input className={style.input}
                   type="text"
                   placeholder="Search"
                   onKeyUp={handlePressButton}
                   onChange={handleSetSearchValue}
                   value={searchValue}/>
            <button className={style.button} onClick={handlePressButton}>
            <img alt="search_icon" className={style.icon}
                 src={"https://listimg.pinclipart.com/picdir/s/109-1093260_search-loop-svg-png-icon-free-download-524293.png"}/>
            </button>
        </div>
    )
}