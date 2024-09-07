import React, { createContext, useEffect, useState } from 'react'
import app from './../firebase/firebse.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const crearteuser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email, password)

  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('user in the auth state change', currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    }
  },[])

  const authInfo = {
    user, 
    crearteuser,
    signIn,
    logOut,
    loading
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
