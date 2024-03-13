import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword, signOut, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";



initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    

    // const navigate = useNavigate();

    const auth = getAuth();

    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);

                // redirect 
                // const destination = location?.state.from || '/';
                // navigate(destination);

                saveUser(result.user?.email, result.user?.displayName, "PUT")



            })
            .finally(() => setIsLoading(false));
    }

    const emailPasswordCreateUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);

                updateUser(name);



                // -----------------
                //save user to the database
                saveUser(email, name, "POST");
                // navigate("/")

                // ...

                console.log(user)
            })
            .catch((error) => {

                console.log(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    };


     // send user Data base 
     const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        // setIsLoading(true);

        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                // setIsLoading(false);
            })
    };



    const signInEmailPasswordUser = (email, password, location, history) => {
        setIsLoading(true);
        // console.log(email);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user)
                // navigate("/")
                // ...

                // const destination = location?.state.from || '/';
                // history.push(destination);


            })
            .catch((error) => {

                console.log(error.message)
            })
            .finally(() => setIsLoading(false));
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

    // Update User 
    
    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
            console.log(error);
        });
    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser('')
                // navigate("/")
            })
    }

    return (
        { signInWithGoogle, user,emailPasswordCreateUser,signInEmailPasswordUser, isLoading, logOut }
    )
}

export default useFirebase