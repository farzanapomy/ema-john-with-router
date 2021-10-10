import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation()
    const redirect_uri = location.state?.from || '/shop'
    console.log('came From', location.state?.from)

    const history = useHistory()
    const handleGooglelogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)

            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Log in</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />

                </form>
                <p>New to ema-john <Link to="/register">Create Account</Link></p>
                <div>------------- Or -------------</div>
                <button onClick={handleGooglelogIn} className="btn-regular">Google sing in</button>
            </div>
        </div >
    );
};

export default Login;