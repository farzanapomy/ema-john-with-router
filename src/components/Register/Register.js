import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>register : Create Accout</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" placeholder="Your password" id="" />
                    <br />
                    <input type="password" name="" placeholder="re-enter password" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <h2>Already have an Account? <Link to="/login">Log in</Link></h2>
                <div>
                    -------------- OR --------------
                </div>
                <button className="btn-regular">Google Sign in</button>
            </div>
        </div>
    );
};

export default Register;