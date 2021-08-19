import {Book} from "./book/Book";
import React from "react";
import {BookType} from "../../bll/books/books-model";
import style from "./BooksContainer.module.css"
import {useDispatch} from "react-redux";
import {getBooks} from "../../bll/books/books-actions";

type BooksContainerPropsType = {
    totalBooks: number | undefined
    books: Array<BookType>
}

export const BooksContainer = ({totalBooks, books}: BooksContainerPropsType) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(getBooks())
    }

    return (
        <div className={style.wrapper}>
            {totalBooks ? <h3 className={style.header}>{`Found ${totalBooks} results`}</h3> : null}
            <div className={style.booksWrapper}>
                {books
                    ? books.map((book, i) => <Book {...book} key={i}/>)
                    : null}
            </div>
            {totalBooks !== undefined && totalBooks > 30
                ? <button onClick={handleClick} className={style.button}>more results</button>
                : null}
        </div>
    )
}