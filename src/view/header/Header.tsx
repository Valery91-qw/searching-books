import {SearchField} from "./searchField/SearchField";
import style from "./Header.module.css"

export const Header = () => {
    return(
        <header className={style.wrapper}>
            <h2>Search for books</h2>
            <SearchField />

            <select>
                <option value="all">all</option>
                <option value="art">art</option>
                <option value="biography">biography</option>
                <option value="computers">computers</option>
                <option value="history">history</option>
                <option value="medical">medical</option>
                <option value="poetry">poetry</option>
                <option value="poetry">poetry</option>
                <option value="poetry">poetry</option>
            </select>

            <select>
                <option value="relevance">relevance</option>
                <option value="newest">newest</option>
            </select>
        </header>
    )
}