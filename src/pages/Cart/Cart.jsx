import { useState, useEffect } from "react"
import { useContext } from "react"
import { LoginContext } from "../../LoginContext/LoginContext";
import { OnClickButton } from "../../components/OnClickButton/OnClickButton"
import style from "./Cart.module.scss"
import axios from "axios";

export function Cart() {
    const { user } = useContext(LoginContext)
    const [cart, setCart] = useState([])
    const token = user.access_token


    useEffect(() => {
        const getData = async () => {
            const endPoint = `http://localhost:4000/cart`
            const options = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            const result = await axios.get(endPoint, options)
            setCart(result.data);
            console.log("Her er cart", cart);

        }
        getData()


    }, [])

    async function deleteItem(id, poster_id) {
        const url = `http://localhost:4000/cart/${id}?poster_id=${poster_id}`
        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        await fetch(url, options).then(res => res.json()).then(data => setCart(data))
    }

    return (
        <section className={style.cart}>
            {
                cart?.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item.poster.image} alt="{item.poster.name}" />
                            <h3>{item.poster.name}</h3>
                            <p>{item.poster.price} kr</p>
                            <OnClickButton clickEvent={() => deleteItem(item.id, item.poster_id)}>Delete</OnClickButton>
                        </div>
                    )
                })
            }
        </section>
    )
}

//() => deleteItem(item.id, item.poster_id)