import React from 'react';
import {Header} from "./header/Header";
import style from "./App.module.css"


function App() {

    return (
        <div className={style.wrapper}>
            <Header/>
        </div>
    );
}

export default App;
