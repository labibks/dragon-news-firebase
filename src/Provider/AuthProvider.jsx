import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading] = useState(true)

    // console.log(user)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

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

    const signInGoogle =()=>{
       return signInWithPopup(auth,googleProvider)
    }

    const signInGitHub=()=>{
        return signInWithPopup(auth,githubProvider)
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
        updateUser,
        signInGoogle,
        googleProvider,
        signInGitHub,
        githubProvider
    }
    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;