import { useEffect, useState } from "react"
import style from "./Home.module.scss"
import hero from "../../assets/homeHero.jpg";
import { OnClickButton } from "../../components/OnClickButton/OnClickButton";
import { Headline } from "../../components/Headline/Headline";

export function Home() {
    const [ posters, setPosters ] = useState([])

    useEffect(() => {
        const url = "http://localhost:4000/poster/list?limit=2"
        fetch(url).then(res => res.json()).then(data => setPosters(data))
    },[])

    return(
        <section className={style.home}>
            <img src={hero} alt="" />
            <Headline>Sidste nyt...</Headline>
            <div>
                {
                    posters?.map((item, index) => {
                        return(
                            <figure key={index}>
                                <img src={item.image} alt="" />
                                <figcaption>
                                    <h3>{item.name}</h3>
                                    <p>{item.genres[0].title}</p>
                                    <OnClickButton clickEvent={() => alert('Du har klikket')}>Læs mere</OnClickButton>                                
                                </figcaption>
                            </figure>
                        )
                    } )
                } 
            </div>

            
            
        </section>
    )    
}