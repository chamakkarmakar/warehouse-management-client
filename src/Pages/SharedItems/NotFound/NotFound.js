import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='my-28'>
            <h1 className='text-6xl '>OOPS!</h1>
            <h5>404-Page Not Found</h5>
            <button className='text-white rounded-full px-10 py-3 my-5 bg-indigo-500 hover:bg-indigo-800'>
                <Link to='/' >Go To Home Page</Link>
            </button>
        </div>
    );
};

export default NotFound;