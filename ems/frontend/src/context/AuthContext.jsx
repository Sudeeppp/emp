import { createContext, useContext, useState } from "react";



const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    

    const loginUser = (userData) => {
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
    }


    const logoutUser = () => {
        setUser(null)
        localStorage.removeItem("user")
    }

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    )

}

const useAuth = () => useContext(AuthContext)

export default useAuth;