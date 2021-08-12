import React, {useEffect} from 'react';
import {Header} from "./header/Header";
import style from "./App.module.css"
import {googleBookApi} from "../dal/googleBookApi";

function App() {

    useEffect(() => {
        console.log(googleBookApi.getBooks())
    }, [])

  return (
      <div className={style.wrapper}>
      <Header />
      <body>body</body>
    </div>
  );
}

export default App;
