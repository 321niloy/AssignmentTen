import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase.config';


const googleprovider = new GoogleAuthProvider
const gitprovider = new GithubAuthProvider
export const Authcontex = createContext()
const auth = getAuth(app);

const Authprovider = ({children}) => {
    const [user,setuser] = useState(null)
    const [loader,setLoader] = useState(true)
    const createuser = (email,password) =>{
        return createUserWithEmailAndPassword(auth ,email,password)
    }

    const SignIn = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () =>{
        setLoader(true)
        return signOut(auth)
    }

const googlesignin = () =>{
    setLoader(true)
    return signInWithPopup(auth, googleprovider)
}
const GitLOGin = () =>{
    setLoader(true)
    return signInWithPopup(auth, gitprovider)
}

useEffect(()=>{
    const unsubscribed =  onAuthStateChanged(auth,loggedUser =>{
            setuser(loggedUser);
            setLoader(false)
        })
        return ()=>{
            unsubscribed()
        }
    },[])

const authinfo = {
    googlesignin,
    GitLOGin ,
    createuser ,
    SignIn,
    logout,
    user,
    loader
}
    
    return (
        <Authcontex.Provider value={authinfo}>
         {children}
        </Authcontex.Provider>
    );
};

export default Authprovider;