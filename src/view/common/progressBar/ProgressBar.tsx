import style from "./ProgressBar.module.css"

type PropsType = {
    isProgress: boolean
}

export const ProgressBar = ({isProgress}: PropsType) => {

    if(isProgress) {
        return (
            <div className={style.wrapper}>
                <div className={style.inner}> </div>
            </div>
        )
    } else {
        return <></>
    }
}