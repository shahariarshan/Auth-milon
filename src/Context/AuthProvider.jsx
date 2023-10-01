import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


// creating context -step ------1
export const AuthContext =createContext(null)
const googleProvider =new GoogleAuthProvider()
const gitProvider =new GithubAuthProvider();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    // const authInfo ={Name:'Shahariar Mohammad'}
    const [user ,setUser] = useState(null)
    const [loading,setLoading] =useState(true)


    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const logOut=() =>{
        setLoading(true)
       return signOut(auth)

    } 

  const signInWithGoogle =() =>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
   
  }
  const signInWithGitHub =() =>{
    setLoading()
    return signInWithPopup(auth,gitProvider);

  }


    useEffect(() =>{
       const unSubscribe = onAuthStateChanged (auth,(currentUser)=>{
           setUser(currentUser)
           setLoading(false)
           console.log('auth provider',currentUser)

        })
        return () =>{
            unSubscribe;
        }
    },[])


        const signIn =(email,password) => {
            return signInWithEmailAndPassword(auth,email,password)
        }


    const authInfo ={
        user,
        loading,
        signInWithGoogle,
        signInWithGitHub,
        createUser,
        signIn,
        logOut
            }
    return (
        // set provider with value 
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.prototype={
    children:PropTypes.node
}