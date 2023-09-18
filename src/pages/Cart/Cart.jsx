import { useState, useEffect } from "react"
import { NavLink, useParams } from 'react-router-dom'
import style from "./Cart.module.scss"
import { OnClickButton } from "../../components/OnClickButton/OnClickButton";

export function Cart() {

    const [cart, setCart] = useState([])
    const { token } = useParams()

    useEffect(() => {
        const urlCart = `http://localhost:4000/cart/${token}`
        fetch(urlCart).then(res => res.json()).then(data => setCart(data))
    }, [])
    console.log(cart);


    return (<p>Her er cart</p>)
}