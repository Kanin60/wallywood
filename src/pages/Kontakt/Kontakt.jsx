import style from "./Kontakt.module.scss";
import { Headline } from "../../components/Headline/Headline";
import { OnClickButton } from "../../components/OnClickButton/OnClickButton";

export function Kontakt() {

    const regex = /^[a-zA-ZæÆøØåÅ -]+$/;





    return(
        <section className={style.kontakt}>
            <form>
                <Headline>Kontakt os</Headline>
                <div>
                    <label htmlFor="name">Dit navn: <span>*</span></label>
                    <input type="text" name="name"/>
                    <label htmlFor="email">Din email: <span>*</span></label>
                    <input type="email" name="email"/>
                    <label htmlFor="msg">Din besked: <span>*</span></label>
                    <textarea name="msg" id="msg" cols="30" rows="15"></textarea>
                </div>
                <OnClickButton clickEvent={() => alert('Beskeden er desværre ikke modtaget, for det ved jeg ikke hvordan jeg skal gøre.')}>Send</OnClickButton>
            </form>
        </section>
    )    
}