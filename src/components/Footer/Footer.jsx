import style from "./Footer.module.scss";
import { FaPinterestSquare, FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"

export const Footer = () => {

    return(
        <footer className={style.footer}>
            <ul>
                <h4>Wallywood</h4>
                <li>Øster Uttrupvej 1</li>
                <li>9000 Aalborg</li>
            </ul>
            <ul>
                <li>CVR: 12345678</li>
                <li><a href="mailto:info@plakatshoppen.dk">MAIL: info@plakatshoppen.dk</a></li>
                <li>MOBIL: 9812 3456</li>
            </ul>
            <figure>
                <FaPinterestSquare className={style.footerIcon} />
                <FaInstagramSquare className={style.footerIcon} />
                <FaFacebookSquare className={style.footerIcon} />
                <FaTwitterSquare className={style.footerIcon} />
            </figure>
        </footer>
    )
}