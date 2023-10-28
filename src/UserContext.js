import { createContext, useState } from "react";

export const UserContext = createContext();
export function UserProvider({ children }) {
    const [user, setUser] = useState({
        email: null,
        userId: null,
        userName: null,
        role: null,
        expiration: null,
        token: null,
        loggedIn: false,
    });
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {console.log(user, "UserContext")}
            {children}
        </UserContext.Provider>
    )
}