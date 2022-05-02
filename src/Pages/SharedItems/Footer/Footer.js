import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h6 className="uppercase font-semibold mb-4 flex items-center justify-center md:justify-start">
                        About The Store
                        </h6>
                        <p>
                        The Store at Shoponix is an original voice, and one of the leading shopping destinations in New York City, offering a curated selection of well-executed contemporary artist-made objects and jewelry.
                        </p>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                        Quick Links
                        </h6>
                        <p className="mb-4">
                            <span className="text-gray-600">About us</span>
                        </p>
                        <p className="mb-4">
                            <span className="text-gray-600">Shop now</span>
                        </p>
                        <p className="mb-4">
                            <span className="text-gray-600">Cart</span>
                        </p>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Support links
                        </h6>
                        <p className="mb-4">
                            <span className="text-gray-600">My Profile</span>
                        </p>
                        <p className="mb-4">
                            <span className="text-gray-600">My Orders History</span>
                        </p>
                        <p className="mb-4">
                            <span className="text-gray-600">Home</span>
                        </p>
                        <p>
                            <span className="text-gray-600">Help</span>
                        </p>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Contact
                        </h6>
                        <ul>
                            <li className="flex items-center justify-center md:justify-start mb-4"> BANGLADESH</li>
                            <li className="flex items-center justify-center md:justify-start mb-4"> info@example.com</li>
                            <li className="flex items-center justify-center md:justify-start mb-4">+ 01 234 567 88 </li>
                            <li className="flex items-center justify-center md:justify-start"> + 01 234 567 89</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center p-6 bg-gray-200">
                <span>Copyright © 2022 : </span>
                <Link className="text-gray-600 font-semibold" to="https://tailwind-elements.com/">Grocery</Link> Designed By <span className='font-semibold '> Chamak</span>
            </div>
        </footer>
    );
};

export default Footer;