import {Book} from "./book/Book";
import React from "react";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../bll/store";
import {BookType} from "../../bll/books/books-model";


export const BooksContainer = () => {

    const books = useSelector<RootReducerType, Array<BookType>>(state => state.books.books)
    const totalBooks = useSelector<RootReducerType, number | undefined>( state => state.books.totalCountBooks)

    return(
        <div>
            {totalBooks ? <p>{`Found ${totalBooks} results`}</p> : null }
            {books
                ? books.map((book, i) => <Book {...book} key={i}/>)
                : null}
        </div>
    )
}