import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        alert('register');
    }

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword( email, password);
    }
    return (
        <div id="login-box">
            <div className="left">
                <h1>Sign up</h1>

                <form onSubmit={handleRegister}>
                    <input type="text" name="username" placeholder="Username" required />
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required />
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    <input type="submit" name="signup_submit" value="Sign me up" />
                </form>
                <p>Already have an Account? Please <span className='cursor-pointer text-blue-500' onClick={navigateLogin}>Sign in</span></p>
            </div>

            <div className="right">
                <span className="loginwith">Sign in with<br />social network</span>

                <button className="social-signin facebook">Log in with facebook</button>
                <button className="social-signin twitter">Log in with Twitter</button>
                <button className="social-signin google">Log in with Google+</button>
            </div>
            <div className="or">OR</div>
        </div>
    );
};

export default Register;