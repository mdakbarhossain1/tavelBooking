import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom"
import useAuth from "../../hook/useAuth";

const Register = () => {

    const { emailPasswordCreateUser, setUser, updateUser, saveUser, setIsLoading } = useAuth();

    // State variables to store form data
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a JSON object with form data
        const formData = {
            fullName: fullName,
            email: email,
            password: password,
        };

        emailPasswordCreateUser(email, password, fullName,)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                updateUser(fullName);
                // -----------------
                //save user to the database
                saveUser(email, fullName, "POST");

                navigate(from, {replace : true})
                // navigate("/")
                // ...
                // console.log(user)
            })
            .catch((error) => {
                console.log(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));

        // Log the form data to the console (you can send it to the server or perform any other actions)
        console.log(formData);
        setFullName('');
        setEmail('');
        setPassword('');
        // console.log(user)
    };




    return (
        <div className='w-50 mx-auto'>
            <form onSubmit={handleSubmit}>
                <h3 className='text-center custom-text-primary fw-bold mt-5'>Please Sign Up</h3>

                <div className="mb-3 my-5">
                    <label className="form-label"><i className="fas fa-user text-warning me-2"></i>Full Name</label>
                    <input type="text" className="form-control" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label"><i className="fas fa-envelope-square text-warning me-2"></i>Email</label>
                    <input type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label"><i className="fas fa-key text-warning me-2"></i>Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button variant="success" type="submit" className="btn custom-bg text-white me-3">Sign Up</Button>

                <p className=' mt-4 text-center '>Already have an Account? <Link to='/login'> Please Login</Link> </p>

                <p className='text-danger fw-bold text-center'>error</p>
            </form>
        </div>
    )
}

export default Register