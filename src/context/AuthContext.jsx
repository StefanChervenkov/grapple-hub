import { createContext, useState, useEffect } from "react";
import { getUserData, setUserData, clearUserData } from "../api/util";



export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); //Holds the authenticated user
    const [loading, setLoading] = useState(true); //Holds the loading state of the app

    //Check if the user is already logged in by loading userdata from local storage
    useEffect(() => {
        const storedUser = getUserData();
        if (storedUser) {
            setUser(storedUser);
        }

        setLoading(false);
    }, []);

    // Login function
    const login = (userData) => {
        setUser(userData);
        setUserData(userData);
    };

    // Logout function
    const logout = () => {
        setUser(null);
        clearUserData();
    };    
    
    
    return (
        <AuthContext.Provider value={{user, login, logout, loading}}>
            {children}
        </AuthContext.Provider>
    );
}




