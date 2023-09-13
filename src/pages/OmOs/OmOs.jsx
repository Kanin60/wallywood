import { Headline } from "../../components/Headline/Headline";
import style from "./OmOs.module.scss"
import star from "../../assets/star.png";

export function OmOs() {

    return(
        <section className={style.OmOs}>
            <Headline>Om os</Headline>
            <figure>
                <figcaption>
                    <p>Assumenda obcaecati tenetur nobis repudiandae repellendus, provident nulla, explicabo atque neque amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis qui incidunt nostrum, inventore voluptas assumenda laboriosam alias totam non iste? Deserunt illo ea recusandae. Voluptas, cumque numquam quam eligendi repudiandae maxime mollitia sint error. Velit facilis quam eum, autem illo porro exercitationem voluptates officiis magnam, recusandae asperiores praesentium sapiente debitis accusantium sint possimus sequi sed aperiam. Soluta ratione fugit ullam labore dolores repellendus, animi blanditiis, harum, ipsam rem quae deserunt dolore! Eius, culpa distinctio soluta sunt vel id.</p>
                    <p>Sit amet consectetur adipisicing elit. Consectetur adipisicing elit. Officiis, explicabo. Magni et in esse est quo, nam sint quaerat iusto illo id aliquid porro inventore, at architecto tempore repellat quod. Voluptas maiores eveniet eos soluta maxime excepturi dolores modi, aut unde repellendus amet! Velit officiis nulla, tenetur et accusantium dicta. Def explicabo atque neque amet consectetur</p>
                    <p>Animi eos facilis molestias quod deleniti sit blanditiis quisquam quam obcaecati dolorem, eveniet inventore nihil quas aliquam sequi, necessitatibus elit. Recusandae quis explicabo atque neque amet consectetur dicta excepturi exercitationem alias omnis mollitia. Cupe adipisci fugiat tenetur!</p>
                </figcaption>
                <img src={star} alt="Stjerne" />
            </figure>
        </section>
    )    
}