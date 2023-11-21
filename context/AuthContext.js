"use client"
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) { //children creates a higher order component. Higher order components wrap around other stuff. Not self closing. All wrapped in the higher order component are called children.
    
    const [user, setUser] = useState(null)
    
    const _setUser = (data) => {
        if(data){ //login
            sessionStorage.setItem("user", JSON.stringify(data)) 
        } else{ //logout
            sessionStorage.removeItem("user") 
        }
        setUser(data) //set state regardless
    }

    return(
        <AuthContext.Provider value={{ user, setUser: _setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

