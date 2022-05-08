import React from 'react';
const Banner = () => {
    return (
        <div>
            <img src="https://media.istockphoto.com/photos/dairy-products-shot-on-bluish-tint-background-picture-id909574006?b=1&k=20&m=909574006&s=170667a&w=0&h=X82gI6xUcBbtBBVCr0zlOqgy3l2vrmbSeljJWbyNfZQ=" alt="" className='w-full h-auto mt-2 relative' />
            <div className='top-32 left-4 absolute md:top-52  md:left-7'>
                <h2 className='text-xl md:text-5xl font-bold text-amber-700 '>SURPRISE dairy!</h2>
                <p className='text-md text-white'>Delivery in 1 hour</p>
            </div>
        </div>
    );
};

export default Banner;