import {SearchField} from "./searchField/SearchField";
import style from "./Header.module.css"
import {SearchOptions} from "./searchOptions/SearchOptions";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../bll/store";
import {ChangeEvent, useCallback} from "react";
import {setCategory, setSort} from "../../bll/search/search-actions";
import {getBooks} from "../../bll/books/books-actions";

export const Header = () => {

    const searchValue = useSelector<RootReducerType, string>(state => state.search.searchValue)
    const elementsCount = useSelector<RootReducerType, number>(state => state.search.elementsCount)
    const category = useSelector<RootReducerType, Array<string>>(state => state.search.categories)
    const sorted = useSelector<RootReducerType, Array<string>>(state => state.search.sorted)

    const dispatch = useDispatch()

    const setOptionValue = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        let selectedValue = event.currentTarget.value
        if(sorted.includes(selectedValue)) {
            dispatch(setSort(selectedValue))
        } else {
            dispatch(setCategory(selectedValue))
        }
    },[dispatch, sorted])

    const handlePressButton = (event: any) => {
        if(event.key === 'Enter' || event.type === 'click') {
            dispatch(getBooks(searchValue, elementsCount))
        }
    }

    return(
        <header className={style.wrapper}>
            <h2 className={style.title}>Search for books</h2>
            <SearchField searchValue={searchValue} handlePressButton={handlePressButton} />
            <SearchOptions setOptionValue={setOptionValue} option={category} />
            <SearchOptions setOptionValue={setOptionValue} option={sorted} />
        </header>
    )
}