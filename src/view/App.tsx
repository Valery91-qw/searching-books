import React from 'react';
import {Header} from "./header/Header";
import style from "./App.module.css"
import {BooksContainer} from "./booksContainer/BooksContainer";

function App() {

    return (
        <div className={style.wrapper}>
            <Header/>
            <BooksContainer />
        </div>
    );
}

export default App;
