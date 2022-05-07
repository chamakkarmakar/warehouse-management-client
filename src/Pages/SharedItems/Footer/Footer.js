import { HeartIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className=" bg-rose-50">
            <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">Surprise Dairy!</p>
                        <p className="max-w-xs mt-4 text-sm text-gray-600"> world's top dairy product to think about your benefit.By offering cheap, nutrient-rich dairy items and contributing to good economic impact, we are cultivating healthy, thriving communities.</p>

                    </div>
                    <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <p className="font-medium">
                                Quick Links
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-lg text-gray-500">
                                <Link to='/about' className="hover:opacity-75"> About Us</Link>
                                <Link to='/allproducts' className="hover:opacity-75"> All Products </Link>
                                <Link to='/allproducts' className="hover:opacity-75"> Manage Inventories </Link>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium">
                                Support Links
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-lg text-gray-500">
                                <Link to='/blog' className="hover:opacity-75"> Blog </Link>
                                <Link to='/addproduct' className="hover:opacity-75"> Add a Product </Link>
                                <Link to='/allproducts' className="hover:opacity-75"> Edit a Product </Link>
                            </nav>
                        </div>
                        <div>
                            <p className="font-medium">
                                Contact
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-lg text-gray-500">
                                <li className="hover:opacity-75"  > 112/A Kotowali </li>
                                <li className="hover:opacity-75"  > Chittagong </li>
                                <li className="hover:opacity-75"  > Bangladesh </li>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center py-4 mt-6'>
            <small className="text-gray-800 my-auto mx-auto">
                © {year}. Made with By <HeartIcon className='inline w-5 h-5 text-red-700'></HeartIcon><span className="ml-1 text-rose-900">Chamak Karmakar </span>
            </small>
            </div>

        </footer>
    );
};

export default Footer;