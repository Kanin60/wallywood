import { FaBasketShopping } from "react-icons/fa6"
import style from "./Header.module.scss"

export const Header = () => {

    return(
        <header className={style.headerstyle}>
            <h1>Wallywood</h1>
            <FaBasketShopping className={style.cart}/>
        </header>
    )
}