import { FaBasketShopping } from "react-icons/fa6"
import style from "./Header.module.scss"
import { NavLink } from "react-router-dom"
import { UserDetails } from "../UserDetails/UserDetails";

export const Header = () => {

    //retunerer header med 2 link to home-siden og cart-siden.
    return (
        <header className={style.headerstyle}>
            <NavLink to="/" style={{ textDecoration: "none" }}><h1>Wallywood</h1></NavLink>
            <NavLink to="/cart" ><FaBasketShopping className={style.cart} /> <UserDetails /></NavLink>
        </header>
    )
}