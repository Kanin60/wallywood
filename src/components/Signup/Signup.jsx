import { useForm } from "react-hook-form";
import { StyledInput } from "../styles/input.styled"
import { StyledILabel } from "../styles/label.styled";
import { Headline } from "../Headline/Headline"
import style from "./Signup.module.scss";

export const Signup = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    // opretter ny user - sender data til api'et fra formen nedenfor
    const onSubmit = (data) => {
        const url = "http://localhost:4000/users"
        const body = new URLSearchParams()
        body.append("firstname", data.firstname)
        body.append("lastname", data.lastname)
        body.append("email", data.email)
        body.append("password", data.password)
        body.append("org_id", "1")
        body.append("is_active", "1")

        const options = { method: "POST", body: body }

        fetch(url, options).then(res => res.json()).then(data => console.log(data))
    };

    //retunerer en form med flere input som hver har validering og error handlinger
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.signup}>
            {" "}
            <Headline>Sign Up:</Headline>
            <div>
                <StyledILabel> Fornavn:{" "}</StyledILabel>
                <StyledInput {...register("firstname", { required: true, minLength: 2 })} />
                {errors.firstname?.type === "required" && (<span>Du skal skrive dit fornavn</span>)}
                {errors.firstname?.type === "minLength" && (<span>Du skal skrive et længere fornavn</span>)}

                <StyledILabel>Efternavn:{" "}</StyledILabel>
                <StyledInput {...register("lastname", { required: true, minLength: 2 })} />
                {errors.lastname?.type === "required" && (<span>Du skal skrive efternavn</span>)}
                {errors.lastname?.type === "minLength" && (<span>Du skal skrive et længere efternavn</span>)}

                <StyledILabel>Email:{" "}</StyledILabel>
                <StyledInput type="email" {...register("email", { required: true, minLength: 2 })} />
                {errors.email?.type === "required" && (<span>Du skal skrive brugernavn</span>)}

                <StyledILabel>Password:{" "}</StyledILabel>
                <StyledInput type="password" {...register("password", { required: true })} />
                {errors.password && <span>Du skal skrive password</span>}
            </div>
            <input type="submit" value="Send" />
        </form>
    )
}