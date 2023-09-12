import { useEffect, useState } from "react"
import style from "./Home.module.scss"
import hero from "../../assets/homeHero.jpg";
import { OnClickButton } from "../../components/OnClickButton/OnClickButton";

export function Home() {
    const [ posters, setPosters ] = useState([])
    const [ slicedPoster, setSlicedPoster] = useState()

    useEffect(() => {
        const url = "http://localhost:4000/poster/list?limit=2"
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