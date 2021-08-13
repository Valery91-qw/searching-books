import {SearchField} from "./searchField/SearchField";
import style from "./Header.module.css"
import {SearchOptions} from "./searchOptions/SearchOptions";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../bll/store";

export const Header = () => {

    const category = useSelector<RootReducerType, Array<string>>(state => state.search.categories)
    const sorted = useSelector<RootReducerType, Array<string>>(state => state.search.sorted)

    return(
        <header className={style.wrapper}>
            <h2>Search for books</h2>
            <SearchField />
            <SearchOptions option={category} />
            <SearchOptions option={sorted} />
        </header>
    )
}