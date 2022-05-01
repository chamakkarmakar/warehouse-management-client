import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {productId}=useParams();
    return (
        <div>
            <h2 className='text-3xl font-extrabold'>Product Details:{productId}</h2> <br />
            <Link to='/checkout' className='mt-9 bg-red-400 text-xl text-yellow-50 hover:bg-red-700 font-bold rounded-3xl p-4 cursor-pointer'>
                Checkout
            </Link>
        </div>
    );
};

export default ProductDetails;