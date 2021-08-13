type PropsType = {
    option: Array<string>
}

export const SearchOptions = (props: PropsType) => {

    return(
        <select>
            {props.option.map((el, i) => <option key={i + el} value={el}>{el}</option>)}
        </select>
    )
}