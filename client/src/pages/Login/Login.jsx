
import { Button } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { useState } from 'react';
const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // let location = useLocation();
    



    const { signInWithGoogle, logOut, signInEmailPasswordUser, user } = useAuth();
    const handleGoogleLogin = () => {
        signInWithGoogle()
            
         
                
                // location('/')
                
    }

    const handleLogOut = () => {
        logOut();
        // console.log('Logout')
        // location('/');
    }

    const handleEmailLogin = (e) => {
        e.preventDefault();
        signInEmailPasswordUser(email, password)

        // console.log(user, "im from login")

        setEmail('');
        setPassword('');

    }

    return (
        <div>
            <div className='my-5 mx-auto w-50'>
                <form onSubmit={handleEmailLogin}>
                    <h3 className='text-center custom-text-primary fw-bold my-3'>Please Sign In</h3>
                    <div className="mb-3 my-5">
                        <label htmlFor="exampleInputEmail1" className="form-label"><i className="fas fa-envelope-square custom-text-warning me-2"></i>E-mail</label>
                        <input type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label"><i className="fas fa-key custom-text-warning me-2"></i>Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div>
                        <p className='custom-cursor-style text-primary'> Forgot Password ? </p>
                        <Button type="submit" variant="success" className="btn text-white fw-bold me-3 px-4 mt-2">Login</Button>
                        <Button variant="warning" className='me-3 mt-2 text-white fw-bold' onClick={handleGoogleLogin}><FaGoogle className="mx-2" />Google</Button>
                        <p className=' mt-4'>Don&apos;t have an account?<Link to='/register'> Sign Up</Link></p>
                        <p className='text-danger fw-bold mt-4'>error</p>
                    </div>

                    <div><button onClick={handleLogOut}>Logout</button></div>

                </form>
            </div>
        </div>
    );
};

export default Login;