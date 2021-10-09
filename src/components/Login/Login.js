import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Log in</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your email" />
                    <br />
                    <input type="submit" value="Submit" />

                </form>
                <p>New to ema-john <Link to="/register">Create Account</Link></p>
                <div>------------- Or -------------</div>
                <button className="btn-regular">Google sing in</button>
            </div>
        </div >
    );
};

export default Login;