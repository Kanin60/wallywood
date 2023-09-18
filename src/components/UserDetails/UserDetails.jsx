import { useContext } from "react"
import { LoginContext } from "../../LoginContext/LoginContext";


export const UserDetails = () => {
    const { User } = useContext(LoginContext)

    console.log("Her er user fra UserDetails", User);
    return (
        <p>?</p>
    )
}