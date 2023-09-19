import { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'
import style from "./Home.module.scss"
import hero from "../../assets/homeHero.jpg";
import { OnClickButton } from "../../components/OnClickButton/OnClickButton";
import { Headline } from "../../components/Headline/Headline";

export function Home() {
    const [posters, setPosters] = useState([])
    //henter 2 data fra poster-list api
    useEffect(() => {
        const url = "http://localhost:4000/poster/list?limit=2"
        fetch(url).then(res => res.json()).then(data => setPosters(data))
    }, [])

    /*retunerer "hero", overskrift og to cards med data fra poster-list api'et. 
    Knappen i card'et sender slug'en med som et parameter til details*/
    return (
        <section className={style.home}>
            <img src={hero} alt="Smilende pige som sidder i en biograf" />
            <Headline>Sidste nyt...</Headline>
            <div>
                {
                    posters?.map((item, index) => {
                        return (
                            <figure key={index}>
                                <img src={item.image} alt={item.name} />
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