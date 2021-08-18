import {Book} from "./book/Book";
import React from "react";
import {BookType} from "../../bll/books/books-model";

type BooksContainerPropsType = {
    totalBooks: number | undefined
    books: Array<BookType>
}

export const BooksContainer = ({totalBooks, books}: BooksContainerPropsType) => {

    return(
        <div>
            {totalBooks ? <p>{`Found ${totalBooks} results`}</p> : null }
            {books
                ? books.map((book, i) => <Book {...book} key={i}/>)
                : null}
        </div>
    )
}