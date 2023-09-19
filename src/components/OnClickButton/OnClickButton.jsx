import style from "./OnClickButton.module.scss";

export const OnClickButton = ({ clickEvent, children }) => {
    //retunerer en knap med et event og dynamisk tekst(children)
    return (
        <button className={style.OnClickButton} onClick={clickEvent}>{children}</button>
    )
}