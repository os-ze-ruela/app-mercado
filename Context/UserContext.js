import React, { useState, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {

    const [isLogged, setLogged] = useState(false)

    async function login() {
        setLogged(true)
    }

    return (
        <UserContext.Provider value={{ isLogged, setLogged, login }}>
            {props.children}
        </UserContext.Provider>
    )

}