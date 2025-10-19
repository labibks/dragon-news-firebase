import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading] = useState(true)

    console.log(user)

    const creatUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
       
    }

    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect (()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        setLoading(false);
            
        })
        return()=>{
            unsubscribe()
        }
    },[])

    const authData = {
        creatUser,
        user,
        setUser,
        logOut,
        signIn,
        loading,
        updateUser
    }
    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;