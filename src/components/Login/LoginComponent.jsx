import { useForm } from "react-hook-form";
import { Headline } from "../Headline/Headline";
import { useContext } from "react";
import { LoginContext } from "../../LoginContext/LoginContext";
import { StyledInput } from "../styles/input.styled";
import { StyledILabel } from "../styles/label.styled";
import { UserDetails } from "../../components/UserDetails/UserDetails";
import style from "./LoginComponent.module.scss";

export const LoginComponent = () => {

    const { setUser } = useContext(LoginContext)

    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        const url = "http://localhost:4000/login"
        const body = new URLSearchParams()
        body.append("username", data.username)
        body.append("password", data.password)
        const options = { method: "POST", body: body }
        fetch(url, options).then(res => res.json()).then(data => setUser(data))
    };



    return (
        <>
            <Headline>Login</Headline>
            <section className={style.loginComponent}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <StyledILabel>Brugernavn:{" "}</StyledILabel>
                        <StyledInput {...register("username", { required: true, minLength: 2 })} />
                        {errors.username?.type === "required" && (<span>Du skal skrive dit fornavn</span>)}

                        <StyledILabel>Password:{" "}</StyledILabel>
                        <StyledInput {...register("password", { required: true, minLength: 2 })} />
                        {errors.password?.type === "required" && (<span>Du skal skrive dit fornavn</span>)}
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </section>
        </>
    )
}