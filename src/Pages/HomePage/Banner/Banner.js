import React from 'react';
const Banner = () => {
    return (
        <div className=''>
            <img src="https://img.freepik.com/free-photo/close-up-dairy-products_23-2148610615.jpg?w=2000" alt="" className='w-auto h-auto relative' />
            <div className='top-32 left-4 absolute md:top-52  md:left-7'>
                <h2 className='text-center text-xl md:text-5xl font-bold text-amber-700 '>SURPRISE dairy!</h2>
                <p className='text-md text-white'>Delivery in 1 hour</p>
            </div>
        </div>
    );
};

export default Banner;