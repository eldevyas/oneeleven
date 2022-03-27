import React, { useContext , useEffect, useState } from 'react'
const AuthContext = React.createContext()
import {auth} from '../firebase'

export function useAuth() {
    return useContext(AuthContext)
}


export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return auth.createUserWithEMailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })

    const value = {
        currentUser,
        signup
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}
