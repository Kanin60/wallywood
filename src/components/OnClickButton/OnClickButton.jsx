import style from "./OnClickButton.module.scss";

export const OnClickButton = (clickEvent, text) => {

    return(
        <button className={style.OnClickButton} onclick={clickEvent}>tryk her</button>
    )
}