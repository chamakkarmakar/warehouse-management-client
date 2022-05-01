import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';



const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigateRegister = () => {
        navigate('/register');
    }

    if(user){
        navigate('/home');
    }
    
    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

        signInWithEmailAndPassword( email, password);
    }
    return (
        <div className="container mx-auto mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-xl shadow-2xl">
            <h1 className='text-2xl font-bold pt-7'>SIGN IN</h1>
            <form onSubmit={handleLogin}>
                <div className='mt-8'>
                    <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" ref={emailRef} type="email" placeholder="@gmail.com" required/>
                </div>
                <div className="mt-8">
                    <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" ref={passwordRef} type="password" placeholder="Enter your password" required/>
                </div>
                <div className="mt-10">
                    <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg">
                        Sign In
                    </button>
                </div>
            </form>
            <div className="mt-12 pb-7 text-sm font-display font-semibold text-gray-700 text-center">
                Don't have an account ? <span onClick={navigateRegister} className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign up</span>
            </div>
        </div>
    );
};

export default Login;