import style from './Nav.module.scss'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
    //ændre style(farve og underline) når der bliver trykket på linket
    const activeStyle = ({ isActive, isPending }) => { return { color: isActive ? "#D97852" : "", textDecoration: isActive ? "underline" : "" } }

    //retunerer en navigationsbar som ændre outlet
    return (
        <nav className={style.navigation}>
            <ul>
                <NavLink to="/" style={activeStyle}>Home</NavLink>
                <NavLink to="/plakater" style={activeStyle}>Plakater</NavLink>
                <NavLink to="/om" style={activeStyle}>Om Os</NavLink>
                <NavLink to="/kontakt" style={activeStyle}>Kontakt</NavLink>
                <NavLink to="/login" style={activeStyle}>Login</NavLink>
            </ul>
        </nav>
    )
}