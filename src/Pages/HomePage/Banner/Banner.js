import React from 'react';
const Banner = () => {
    return (
        <div className=''>
            <img src="https://images.unsplash.com/photo-1559598467-f8b76c8155d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" className='w-full h-50 relative' />
            <div className='top-32 left-4 absolute md:top-52  md:left-7'>
                <h2 className='text-center text-xl md:text-5xl font-bold text-rose-500'>SURPRISE dairy!</h2>
                <p className='text-md text-white'>Delivery in 1 hour</p>
            </div>
        </div>
    );
};

export default Banner;