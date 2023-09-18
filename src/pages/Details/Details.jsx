import { useState, useEffect } from "react"
import { NavLink, useParams } from 'react-router-dom'
import style from "./details.module.scss"
import { OnClickButton } from "../../components/OnClickButton/OnClickButton";

export function Details() {

    const [details, setDetails] = useState([])
    const { slug } = useParams()

    useEffect(() => {
        const urlDetails = `http://localhost:4000/poster/details/${slug}`
        fetch(urlDetails).then(res => res.json()).then(data => setDetails(data))
    }, [])
    let description = details.description



    return (
        <section className={style.details}>
            {
                details &&
                <figure>
                    <img src={details.image} alt={details.name} />
                    <article>
                        <h3>{details.name}</h3>
                        {details.genres?.map((item, index) => {
                            return (
                                <p key={index}>{item.title}</p>
                            )
                        })}
                        <p>Beskrivelse: {description ? description : "Kommer snart..."}</p>
                        <p>Størrelse: {details.width} x {details.height}</p>
                        <p>Pris: {details.price}</p>
                        <p>Lager: {details.stock}</p>
                    </article>
                </figure>
            }
            <div>
                <OnClickButton><NavLink style={{ textDecoration: "none", color: "#524641" }} to="/" >Tilbage til home</NavLink></OnClickButton>
            </div>
        </section>
    )
}