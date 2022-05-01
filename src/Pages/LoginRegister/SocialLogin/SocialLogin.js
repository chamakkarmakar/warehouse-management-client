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
                    <span className="bg-white px-4 text-xs text-gray-500">OR</span>
                </div>
            </div>

            <div className='pb-7 mt-5'>
            <button onClick={()=>signInWithGoogle()}className="bg-sky-400 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-sky-500
                                shadow-lg">
                        Sign In With Google
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;