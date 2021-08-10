import {SearchField} from "./searchField/SearchField";
import style from "./Header.module.css"
import {Select} from "./select/Select";

export const Header = () => {

    const select1 = ["all", "art", "biography", "computers", "history", "medical", "poetry"]
    const select2 = ["relevance", "newest"]

    return(
        <header className={style.wrapper}>
            <h2>Search for books</h2>
            <SearchField />
            <Select option={select1} />
            <Select option={select2} />
        </header>
    )
}