import style from "./Plakater.module.scss";
import { Headline } from "../../components/Headline/Headline";
import { AsideGenres } from "../../components/AsideGenres/AsideGenres";

export function Plakater() {

    

    

    return(
        <section className={style.plakater}>
            <Headline>Plakater</Headline>
            <AsideGenres/>
        </section>
    )    
}