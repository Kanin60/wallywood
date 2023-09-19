import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'
import style from "./Home.module.scss"
import hero from "../../assets/homeHero.jpg";
import { OnClickButton } from "../../components/OnClickButton/OnClickButton";
import { Headline } from "../../components/Headline/Headline";

export function Home() {
    const [posters, setPosters] = useState([])

    useEffect(() => {
        const url = "http://localhost:4000/poster/list?limit=2"
        fetch(url).then(res => res.json()).then(data => setPosters(data))
    }, [])

    console.log("List of posters", posters);

    return (
        <section className={style.home}>
            <img src={hero} alt="" />
            <Headline>Sidste nyt...</Headline>
            <div>
                {
                    posters?.map((item, index) => {
                        return (
                            <figure key={index}>
                                <img src={item.image} alt="" />
                                <figcaption>
                                    <h3>{item.name}</h3>
                                    <p>{item.genres[0].title}</p>
                                    <OnClickButton><NavLink style={{ textDecoration: "none", color: "#524641" }} to={`/details/${item.slug}`} >Læs mere</NavLink></OnClickButton>
                                </figcaption>
                            </figure>
                        )
                    })
                }
            </div>



        </section>
    )
}