import {SearchField} from "./searchField/SearchField";
import style from "./Header.module.css"
import {SearchOptions} from "./searchOptions/SearchOptions";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../bll/store";
import {ChangeEvent, useCallback} from "react";
import {setCategory, setSort} from "../../bll/search/search-actions";

export const Header = () => {

    const category = useSelector<RootReducerType, Array<string>>(state => state.search.categories)
    const sorted = useSelector<RootReducerType, Array<string>>(state => state.search.sorted)
    const dispatch = useDispatch()

    const setOptionValue = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        let selectedValue = event.currentTarget.value
        if(category.includes(selectedValue)) {
            dispatch(setCategory(selectedValue))
        } else {
            dispatch(setSort(selectedValue))
        }
    },[category, dispatch])

    return(
        <header className={style.wrapper}>
            <h2 className={style.title}>Search for books</h2>
            <SearchField />
            <SearchOptions setOptionValue={setOptionValue} option={category} />
            <SearchOptions setOptionValue={setOptionValue} option={sorted} />
        </header>
    )
}