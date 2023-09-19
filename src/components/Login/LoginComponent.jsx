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

    /*funktion som sender username og password til api'en og updatere useren i LoginContext, 
    så man er logget ind "globalt" på appen*/
    const onSubmit = (data) => {
        const url = "http://localhost:4000/login"
        const body = new URLSearchParams()
        body.append("username", data.username)
        body.append("password", data.password)
        const options = { method: "POST", body: body }
        fetch(url, options).then(res => res.json()).then(data => setUser(data))
    };


    //retunerer en form med 2 input som hver har validering og en error handling
    return (
        <>
            <Headline>Login</Headline>
            <section className={style.loginComponent}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <StyledILabel>Email:{" "}</StyledILabel>
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