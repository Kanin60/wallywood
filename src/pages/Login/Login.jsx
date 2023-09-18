import style from "./Login.module.scss";
import { useState } from "react";
import { Signup } from "../../components/Signup/Signup"
import { LoginComponent } from "../../components/Login/LoginComponent";
import { OnClickButton } from "../../components/OnClickButton/OnClickButton";

export function Login() {
    const [isLoginTrue, setIsLonginTrue] = useState(true);

    //lav både login og oprettelse
    if (isLoginTrue)
        return (
            <section className={style.login}>

                <LoginComponent />
                <OnClickButton clickEvent={() => setIsLonginTrue(false)}>Ny bruger</OnClickButton>
            </section>
        );
    else
        return (
            <section className={style.login}>
                <Signup />
                <OnClickButton clickEvent={() => setIsLonginTrue(true)}>Allerede bruger?</OnClickButton>
            </section>
        );
}
