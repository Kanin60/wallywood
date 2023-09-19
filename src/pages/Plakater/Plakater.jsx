import style from "./Plakater.module.scss";
import { Headline } from "../../components/Headline/Headline";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { OnClickButton } from "../../components/OnClickButton/OnClickButton";
import { LoginContext } from "../../LoginContext/LoginContext"

export function Plakater() {

    const [poster, setPoster] = useState([])
    const [genres, setGenres] = useState([])
    const [slug, setSlug] = useState("drama")
    const { user } = useContext(LoginContext)


    useEffect(() => {
        //Fetcher liste af plakater under en genre - får slug fra genres
        const url = `http://localhost:4000/poster/list/${slug}?limit=30`
        fetch(url).then(res => res.json()).then(data => setPoster(data))
        //Fetcher genres
        const urlGenres = "http://localhost:4000/genre"
        fetch(urlGenres).then(res => res.json()).then(data => setGenres(data))
    }, [slug])

    //tilføjer poster i cart-api'et
    function AddToCart(id) {
        const url = "http://localhost:4000/cart"

        const body = new URLSearchParams()
        body.append("poster_id", id)
        body.append("quantity", '1')
        const options = { method: "POST", body: body, headers: { Authorization: `Bearer ${user.access_token}` } }

        fetch(url, options).then(res => res.json()).then(data => console.log(data))

    }

    //retunerer en list med genres og en section med cards.
    return (
        <section className={style.plakater}>
            <Headline>Plakater</Headline>
            <h2 style={{ textTransform: "capitalize", fontFamily: "var(--header134)", textAlign: "end", color: "var(--blackCow)" }}>{slug}</h2>
            <div>
                <aside className={style.aside}>
                    <h3>Filtre</h3>
                    <h4>Genres:</h4>
                    {
                        genres &&
                        <ul>
                            {
                                genres?.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <a onClick={() => setSlug(item.slug)} style={{ cursor: "pointer" }}>{item.title}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                    <h4>Pris:</h4>
                    <div>
                        <input type="number" placeholder="0" />
                        <p> - </p>
                        <input type="number" placeholder="3800" />
                    </div>
                </aside>
                <figure>
                    {
                        poster?.map((item, index) => {
                            return (
                                <section key={index} style={{ display: "grid", justifyContent: "center", alignItems: "center" }}>
                                    <img src={item.image} alt={item.name} />
                                    <NavLink to={`/details/${item.slug}`}>{item.name}</NavLink>
                                    <h5>{item.price} kr.</h5>
                                    <OnClickButton clickEvent={() => AddToCart(item.id)}>Læg i kurv</OnClickButton>
                                </section>
                            )
                        })
                    }
                </figure>
            </div>
        </section>
    )
}