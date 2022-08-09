import React, { useState } from 'react';
import initializeConfigue from '../../Firebase/Firebase.init';
import { getAuth,GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signOut, onAuthStateChanged,updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from 'react';



initializeConfigue();
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const [error,setError] = useState('');
    const [loading, setLoading] = useState(true);




    const signUpWithEmailAndPasseord = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmail = (email, password) => { 
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => { 
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => { 
        return signOut(auth);
    }


    // update user

    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
        .then(() => {
            // Profile updated!
             
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }

    // observer

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribe;
    },[])



    return {
        signUpWithEmailAndPasseord,
        signInWithEmail,
        signInWithGoogle,
        logOut,
        updateName,
        user,
        setUser,
        loading,
        setLoading,
        error,
        setError
    }
};

export default useFirebase;