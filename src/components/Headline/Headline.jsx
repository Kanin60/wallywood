import style from "./Headline.module.scss";

export const Headline = ({ children }) => {

    //retunerer dynamisk overskrift.
    return (
        <h2 className={style.headline}>{children}</h2>
    )
}