import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const [selected,setSelected]=useState(false);
    const [open, setOpen] = useState(false);

    const navItems = [
        { item: 'HOME', link: '/' },
        { item: 'PRODUCTS', link: '/products' },
        { item: 'Blog', link: '/blog' },
        { item: 'ABOUT', link: '/about' },
        { item: 'CONTACT', link: '/' }
    ]
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='shadow-lg w-full sticky top-0 left-0 '>
            <div className='md:flex items-center justify-between md:bg-white py-4 md:px-10 px-7'>

                <div className='font-fold text-2xl cursor-pointer text-grey-500'>
                    <span>Inventory Management</span>
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 bg-orange-300 cursor-pointer md:hidden' >
                    {open ? <XIcon className="h-7 w-7 text-blue-500"></XIcon> : <MenuIcon className="h-7 w-7 text-blue-500"></MenuIcon>}
                </div>

                <ul className={`md:flex md:items-center md:bg-white bg-orange-200 md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-9 opacity-100' : 'top-[-650px]'} opacity-100 `}>

                    {
                        navItems.map(item =>
                            <li key={item.item} className='md:ml-8 text-md space-x-1 md:my-0 my-7 '>
                                <Link to={item.link} className='text-gray-500 font-semibold hover:pb-5  hover:text-green-500 hover:border-b-4 border-green-500 transition duration-300 ease-in-out'>{item.item}</Link>
                            </li>
                        )
                    }
                    <li className='md:ml-8 text-md space-x-1 md:my-0 my-7'>
                        {
                            user && 
                            <>
                            <Link to='/myitems' className='text-gray-500 font-semibold hover:pb-5   hover:text-green-500 hover:border-b-4 border-green-500 transition duration-300 ease-in-out'>My Items</Link>

                                {/* <button onClick={()=>setSelected(!selected)} className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto">Dropdown
                                { selected ? 
                                 <ChevronUpIcon className='w-6 h-6'></ChevronUpIcon> : 
                                 <ChevronDownIcon className='w-6 h-6'></ChevronDownIcon>
                                 }
                                </button>

                                <div id="dropdownNavbar" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 ">
                                    <ul className={`py-1 text-sm text-gray-700 ${selected ? 'hidden' : 'show'}`} aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <Link to='/allproducts' className='text-gray-500 font-semibold hover:pb-5   hover:text-green-500 hover:border-b-4 border-green-500 transition duration-300 ease-in-out'>All Products</Link>
                                        </li>
                                        <li>
                                            <Link to='/addproduct' className='text-gray-500 font-semibold hover:pb-5   hover:text-green-500 hover:border-b-4 border-green-500 transition duration-300 ease-in-out'>Add Product</Link>
                                        </li>
                                        <li>
                                            <Link to='/myproduct' className='text-gray-500 font-semibold hover:pb-5   hover:text-green-500 hover:border-b-4 border-green-500 transition duration-300 ease-in-out'>My Product</Link>
                                        </li>
                                    </ul>
                                </div> */}
                            </>
                        }
                    </li>
                    <li className='md:ml-8 text-md space-x-1 md:my-0 my-7'>
                        {
                            user ?
                                <p className='text-white font-semibold cursor-pointer rounded-lg bg-green-400 hover:bg-green-700 p-2 transition duration-300 w-auto ease-in-out' onClick={handleSignOut}>SIGN OUT</p>
                                :
                                <Link to='/login' className='text-gray-500 font-semibold hover:pb-5   hover:text-green-500 hover:border-b-4 border-green-500 transition duration-300 ease-in-out'>SIGN IN</Link>
                        }
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Header;