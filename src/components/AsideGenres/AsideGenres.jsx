import style from "./AsideGenres.module.scss"
import { useEffect, useState } from "react";

export const AsideGenres = () => {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        const urlGenres = "http://localhost:4000/genre"
        fetch(urlGenres).then(res => res.json()).then(data => setGenres(data))
    },[])

    return(
        <aside className={style.aside}>
            <h3>Filtre</h3>
            <h4>Genres:</h4>
            {
                genres &&
                <ul>
                    {
                        genres?.map((item, index) => {
                            return(
                                <li key={index}>
                                    <a >{item.title}</a>
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
                <input type="number" placeholder="3800"/>
            </div>
        </aside>
    )
}