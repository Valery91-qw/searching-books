import style from "./ProgressBar.module.css"

type PropsType = {
    isProgress: boolean
}

export const ProgressBar = ({isProgress}: PropsType) => {

    if (isProgress) {
        return (
            <div role="progressbar" className={style.wrapper}>
                <div className={style.inner}/>
            </div>
        )
    } else {
        return null
    }
}