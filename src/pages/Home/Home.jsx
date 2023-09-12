import { useEffect, useState } from "react"
import style from "./Home.module.scss"
import hero from "../../assets/homeHero.jpg";

export function Home() {
    const [ posters, setPosters ] = useState()
    const [ slicedPoster, setSlicedPoster] = useState()

    useEffect(() => {
        const url = "http://localhost:4000/poster/list"
        fetch(url).then(res => res.json()).then(data => setPosters(data))
        
    },[])
    // posters.slice(0,1) 

    console.log("Her er poster",posters);

    return(
        <section className={style.home}>
            <img src={hero} alt="" />
            <h2>Sidste nyt...</h2>
            <div>
                {
                    posters.slice(0,2)?.map((item, index) => {
                        return(
                            <figure key={index}>
                                <img src={item.image} alt="" />
                                <figcaption>
                                    <h3>{item.name}</h3>

                                </figcaption>
                            </figure>
                        )
                    } )
                } 
            </div>

            
            
        </section>
    )    
}