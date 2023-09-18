import style from "./Footer.module.scss";
import { FaPinterestSquare, FaInstagramSquare, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"

export const Footer = () => {

    return (
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
                <a href="https://www.pinterest.dk/" target="_blank"><FaPinterestSquare className={style.footerIcon} /></a>
                <a href="https://www.instagram.com/" target="_blank"><FaInstagramSquare className={style.footerIcon} /></a>
                <a href="https://www.facebook.com/" target="_blank"><FaFacebookSquare className={style.footerIcon} /></a>
                <a href="https://twitter.com/" target="_blank"><FaTwitterSquare className={style.footerIcon} /></a>
            </figure>
        </footer>
    )
}