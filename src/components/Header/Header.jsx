import { FaBasketShopping } from "react-icons/fa6"
import style from "./Header.module.scss"
import { NavLink } from "react-router-dom"

export const Header = () => {

    return (
        <header className={style.headerstyle}>
            <NavLink to="/" style={{ textDecoration: "none" }}><h1>Wallywood</h1></NavLink>
            <NavLink to="/cart" ><FaBasketShopping className={style.cart} /></NavLink>
        </header>
    )
}