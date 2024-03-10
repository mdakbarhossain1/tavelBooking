import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }

    // User 
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                //  const uid = user.uid;
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser('')
            })
    }

    return (
        { signInWithGoogle, user, logOut }
    )
}

export default useFirebase