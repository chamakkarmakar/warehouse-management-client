import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../SharedItems/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation(); 

    let from = location.state?.from?.pathname || "/";
    let errorElement; 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigateRegister = () => {
        navigate('/register');
    }

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <p className='text-red-900 font-bold'>Error: {error?.message}</p>
    }

    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className="container mx-auto mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-xl shadow-2xl">
            <h1 className='text-2xl font-bold pt-7'>SIGN IN</h1>
            <form onSubmit={handleLogin}>
                <div className='mt-8'>
                    <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" ref={emailRef} type="email" placeholder="@gmail.com" required />
                </div>
                <div className="mt-8">
                    <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" ref={passwordRef} type="password" placeholder="Enter your password" required />
                </div>
                <div className="mt-10">
                    <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg">
                        Sign In
                    </button>
                </div>
            </form>

            {errorElement}

            <div className="mt-8 pb-7 text-sm font-display font-semibold text-gray-700 text-center">
                Don't have an account ? <span onClick={navigateRegister} className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign up</span>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;