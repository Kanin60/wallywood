import { createContext, useState } from "react";

export const LoginContext = createContext(null)

export const LoginContextProvider = ({ children }) => {
    const [user, setUser] = useState([])
    console.log("Her er brugeren: ", user);

    return (
        <LoginContext.Provider value={{ user, setUser }}>
            {children}
        </LoginContext.Provider>
    )
}