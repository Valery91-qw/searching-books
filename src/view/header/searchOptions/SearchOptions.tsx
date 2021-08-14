import {ChangeEvent, memo} from "react";
import style from "./SearchOptions.module.css"

type PropsType = {
    option: Array<string>
    setOptionValue: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const SearchOptions = memo((props: PropsType) => {
    return(
        <select className={style.wrapper} onChange={props.setOptionValue}>
            {props.option.map((el, i) => <option key={i + el} value={el}>{el}</option>)}
        </select>
    )
}, )