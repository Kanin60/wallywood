import { Outlet } from 'react-router-dom'
import { Nav } from "../../components/Nav/Nav";
import { Footer } from '../../components/Footer/Footer';
import { Header } from "../../components/Header/Header";
import style from "./MainLayout.module.scss";

export const MainLayout = () => {

    return(
        <div className={style.mainLayout}>
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}