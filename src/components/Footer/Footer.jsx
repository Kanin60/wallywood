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
                <li>MAIL: info@plakatshoppen.dk</li>
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