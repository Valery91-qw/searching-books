import React from 'react';
import {Header} from "./header/Header";
import style from "./App.module.css"
import {BooksContainer} from "./booksContainer/BooksContainer";
import {useSelector} from "react-redux";
import {RootReducerType} from "../bll/store";
import {BookType} from "../bll/books/books-model";

function App() {

    const books = useSelector<RootReducerType, Array<BookType>>(state => state.books.books)
    const totalBooks = useSelector<RootReducerType, number | undefined>( state => state.books.totalCountBooks)

    return (
        <div className={style.wrapper}>
            <Header/>
            <BooksContainer books={books} totalBooks={totalBooks} />
        </div>
    );
}

export default App;
