import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../SharedItems/Loading/Loading';

const SocialLogin = () => {
    const [
        signInWithGoogle,
        user,
        loading
    ] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className="relative h-px bg-gray-300">
                <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                    <span className="bg-white px-4 text-xs text-gray-500 uppercase">Or</span>
                </div>
            </div>

            <div className='pb-7'>
                <button onClick={() => signInWithGoogle()} className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
                    <span className='text-lg bg-blue-600 p-3 text-white'>Login with Google+</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;