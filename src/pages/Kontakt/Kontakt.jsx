import style from "./Kontakt.module.scss";
import { Headline } from "../../components/Headline/Headline";
import { StyledInput } from "../../components/styles/input.styled"
import { StyledILabel } from "../../components/styles/label.styled";
import { useForm } from "react-hook-form";

export function Kontakt() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  //retunerer en form med validering og error handling.
  return (
    <section className={style.kontakt}>
      <Headline>Kontakt os</Headline>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <StyledILabel htmlFor="name">Dit navn: <span>*</span></StyledILabel>
          <StyledInput {...register("firstName", { required: true })} aria-invalid={errors.firstName ? "true" : "false"} />
          {errors.firstName?.type === "required" && (<p role="alert">Dit navn er nødventigt</p>)}
          <StyledILabel htmlFor="email">Din email: <span>*</span></StyledILabel>
          <StyledInput {...register("mail", { required: "Email er nødventig" })} aria-invalid={errors.mail ? "true" : "false"} />
          {errors.mail && <p role="alert">{errors.mail?.message}</p>}
          <StyledILabel>Din besked: <span>*</span></StyledILabel>
          <textarea rows="12" cols="30" name="msg" {...register("mail", { required: "Husk at skriv en besked før du sender", })} aria-invalid={errors.mail ? "true" : "false"} />
        </div>
        <input type="submit" value={"Send"} />
      </form>
    </section>
  );
}
