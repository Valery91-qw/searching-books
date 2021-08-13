import {ChangeEvent, memo} from "react";

type PropsType = {
    option: Array<string>
    setOptionValue: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const SearchOptions = memo((props: PropsType) => {
    return(
        <select onChange={props.setOptionValue}>
            {props.option.map((el, i) => <option key={i + el} value={el}>{el}</option>)}
        </select>
    )
}, )