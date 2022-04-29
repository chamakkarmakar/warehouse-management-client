import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <img src="https://t3.ftcdn.net/jpg/03/35/74/56/360_F_335745675_MaxYxSsadrviZdThITuHB2oCohYOiwEu.jpg" alt="" className='w-full mt-2 relative' />
            <h2 className='text-xl md:text-5xl font-bold top-32 left-4 absolute md:top-52 text-amber-700 md:left-7'>Grocery Delivery in 1 hour</h2>
        </div>
    );
};

export default Banner;