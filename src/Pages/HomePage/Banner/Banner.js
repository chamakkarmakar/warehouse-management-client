import React from 'react';
const Banner = () => {
    return (
        <div>
            <img src="https://img.freepik.com/free-psd/dairy-products-frame-mock-up_23-2148692595.jpg?size=626&ext=jpg" alt="" className='w-auto h-auto mt-2 relative' />
            <div className='top-32 left-4 absolute md:top-52  md:left-7'>
                <h2 className='text-xl md:text-5xl font-bold text-amber-700 '>SURPRISE dairy!</h2>
                <p className='text-md text-white'>Delivery in 1 hour</p>
            </div>
        </div>
    );
};

export default Banner;