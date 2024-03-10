
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
import { useEffect, useState } from "react";

// Initialize Firebase
initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState('');
    const [spiner, setSpiner] = useState(false);
    

    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth();

    // Google Signin
    const signInUseGoogle = (location, history) => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);

                // redirect 
                const destination = location?.state.from || '/';
                history.push(destination);

                // saveUser(result.user?.email, result.user?.displayName, "PUT")



            })
            .finally(() => setIsLoading(false));

    };


    // Set Admin 
    useEffect(() => {
        setSpiner(true)
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(result => {
                setAdmin(result.admin);
                setSpiner(false)
            })
    }, [user.email])




    // User Create With Email and password
    const emailPasswordCreateUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);

                updateCurrentUser(name);

                history.push('/');


                // -----------------
                //save user to the database
                // saveUser(email, name, "POST");

                // ...
            })
            .catch((error) => {

                console.log(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    };




    const handleEmailLogin = (email, password, location, history) => {
        // e.preventDefault()
        setIsLoading(true);
        // console.log(email);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user)
                // ...

                const destination = location?.state.from || '/';
                history.push(destination);


            })
            .catch((error) => {

                console.log(error.message)
            })
            .finally(() => setIsLoading(false));
    }


    // ===============OnAuth stateChange function=============
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }
            else{
                // User is sign Out
                setUser()
            }
            setIsLoading(false);
        })
    },[])

    // send user Data base 

    // const saveUser = (email, displayName, method) => {
    //     const user = { email, displayName };
    //     setIsLoading(true);

    //     fetch('http://localhost:5000/users', {
    //         method: method,
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //             setIsLoading(false);
    //         })
    // };



    // Logout 
    const logOut = ()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser('')
        })
        .finally(()=>setIsLoading(false))
    }

     // ==============reset password================
     const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setError('')
            })
            .catch(error => setError(error.message))
    }


    return {
        user, 
        admin,
        isLoading,
        error,
        setIsLoading,
        signInUseGoogle,
        emailPasswordCreateUser,
        handleEmailLogin,
        logOut,
        resetPassword,
        spiner
    }
}

export default useFirebase;