import { useContext } from "react"
import { LoginContext } from "../../LoginContext/LoginContext";

export const UserDetails = () => {
    const { user } = useContext(LoginContext)

    console.log("Her er user fra UserDetails", user);
    return (
        <div>
            {user &&
                <p style={{ border: "none", color: "#524641" }}>{user.firstname ? "Velkommen " + user.firstname : ""}</p>
            }
        </div>
    )
}