import { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom'
import style from "./details.module.scss"
import placeholder from "../../assets/placeholder.png"
import { OnClickButton } from "../../components/OnClickButton/OnClickButton";

export function Details() {

    // const [details, setDetails] = useState([])
    // const [slug, setSlug] = useState()

    // useEffect(() => {
    //     const urlDetails = `http://localhost:4000/poster/details/${slug}`
    //     fetch(urlDetails).then(res => res.json()).then(data => setDetails(data))
    // },[])
    
    // console.log(details);
    return(
        <section className={style.details}>
            <figure>
                <img src={placeholder} alt="" />
                <article>
                    <h3>Title:</h3>
                    <p>Genre:</p>
                    <p>Description: </p>
                    <p>Width x height:</p>
                    <p>Price:</p>
                    <p>Stock:</p>
                </article>
            </figure>
            <div>
                <OnClickButton><NavLink style={{textDecoration: "none", color:"#524641"}} to="/" >Tilbage</NavLink></OnClickButton>                                
            </div>
        </section>
    )
}