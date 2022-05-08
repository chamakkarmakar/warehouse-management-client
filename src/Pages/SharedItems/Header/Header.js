import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <nav className="sticky flex flex-wrap items-center justify-between px-2 py-3 bg-rose-50 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link to='/'
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap   text-gray-900">
                        SURPRISE DAIRY
                    </Link>
                    <button
                        className="text-gray-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        {
                            !navbarOpen ? <MenuIcon className='w-5 h-5 text-blue-700'></MenuIcon> : <XIcon className='w-5 h-5 text-blue-700'></XIcon>
                        }
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <Link to='/home'
                                className="px-3 py-2 flex items-center text-xs   font-bold leading-snug text-gray-900 hover:opacity-75">
                                HOME
                            </Link>
                        </li>

                        {
                            user ?
                               <>
                                <li className="nav-item">
                                    <Link to='/allproducts'
                                        className="px-3 py-2 flex items-center text-xs   font-bold leading-snug text-gray-900 hover:opacity-75" >
                                        ALL PRODUCTS
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/addproduct'
                                        className="px-3 py-2 flex items-center text-xs   font-bold leading-snug text-gray-900 hover:opacity-75" >
                                        ADD PRODUCT
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/myitems'
                                        className="px-3 py-2 flex items-center text-xs   font-bold leading-snug text-gray-900 hover:opacity-75" >
                                        MY PRODUCTS
                                    </Link>
                                </li>
                               </>
                                 :
                                <>
                                <li className="nav-item">
                                    <Link to='/products'
                                        className="px-3 py-2 flex items-center text-xs   font-bold leading-snug text-gray-900 hover:opacity-75" >
                                        PRODUCTS
                                    </Link>
                                </li>
                                <li className="nav-item">
                                <Link to='/about'
                                    className="px-3 py-2 flex items-center text-xs   font-bold leading-snug text-gray-900 hover:opacity-75">
                                    ABOUT
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/'
                                    className="px-3 py-2 flex items-center text-xs   font-bold leading-snug text-gray-900 hover:opacity-75">
                                    CONTACT
                                </Link>
                            </li>
                                </>
                        }
                        <li className="nav-item">
                            <Link to='/blog'
                                className="px-3 py-2 flex items-center text-xs   font-bold leading-snug text-gray-900 hover:opacity-75">
                                BLOG
                            </Link>
                        </li>
                        
                        {
                            user ?  
                        <li className="nav-item">
                        <Link to='/' onClick={handleSignOut}
                            className="px-3 py-2 flex items-center text-xs   font-bold leading-snug text-gray-900 hover:opacity-75">
                            SIGN OUT
                        </Link>
                    </li> : 
                    <li className="nav-item">
                    <Link to='/login'
                        className="px-3 py-2 flex items-center text-xs   font-bold leading-snug text-gray-900 hover:opacity-75">
                        SIGN IN
                    </Link>
                </li> 
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;