import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../SharedItems/Loading/Loading';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');

    const navigate = useNavigate();
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
        navigate('/home');
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        console.error(error);
    }

    const handleRegister = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        console.log(email,password);
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className="container mx-auto mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-xl shadow-2xl">
            <h1 className='text-2xl font-bold pt-7'>SIGN UP</h1>
            <form onSubmit={handleRegister}>
                <div className='mt-8'>
                    <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" ref={nameRef} type="text" name='name' placeholder="User Name" />
                </div>
                <div className='mt-8'>
                    <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" ref={emailRef} type="email" name='email' placeholder="@gmail.com" required />
                </div>
                <div className="mt-8">
                    <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" ref={passwordRef} type="password" name='password' placeholder="*************" required />
                </div>
                <div className="mt-10">
                    <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg">
                        Sign Up
                    </button>
                </div>
            </form>
            <div className="mt-8 pb-7 text-sm font-display font-semibold text-gray-700 text-center">
                Already have an account ? <span onClick={navigateLogin} className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign in</span>
            </div>

            <div className="relative h-px bg-gray-300">
                <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                    <span className="bg-white px-4 text-xs text-gray-500 uppercase">Or</span>
                </div>
            </div>

            <div className='pb-7'>
                <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
                    <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500"></span>
                    <span>Sign up with Google</span>
                </button>
            </div>
        </div>
    );
};

export default Register;