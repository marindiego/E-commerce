'use client'

import { AuthContextProps, AuthProviderProps, IUserSession } from "@/types"
import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext<AuthContextProps>({
    userData: null,
    setUserData: () => { },
})
export const AuthProvider: React.FC<AuthProviderProps> = ({
    children,
}) => {
    const [userData, setUserData] = useState<IUserSession | null>(null)

    useEffect(() => {
        if (userData) {
            localStorage.setItem('userSession', JSON.stringify(userData));
        }
    }, [userData]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userSessionStored = localStorage.getItem('userSession');
            setUserData(JSON.parse(userSessionStored!));
        }
    }, []);
    return (
        <AuthContext.Provider value={{ userData, setUserData}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);