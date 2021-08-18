import style from './SearchField.module.css'
import React, {ChangeEvent} from "react";
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../../bll/search/search-actions";

type SearchFieldPropsType = {
    handlePressButton: (event: any) => void
    searchValue: string
}

export const SearchField = ({handlePressButton, searchValue}: SearchFieldPropsType) => {

    const dispatch = useDispatch()

    const handleSetSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValue(event.currentTarget.value))
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