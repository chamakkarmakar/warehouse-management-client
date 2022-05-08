import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products] = useProducts();
    
    const sixProduct=products.slice(0,6);
    return (
        <div className='my-8 container mx-auto'>
            <h1 className='text-3xl text-center font-extrabold my-7'>PRODUCTS</h1>
            <div className=' grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-6 md:mx-auto ml-7'>
                
            {
                sixProduct.map(product => <Product 
                    key={product._id}
                    product={product}></Product>)
            }
            </div>
            <Link className='text-blue-500 float-right mr-16 text-2xl font-semibold' to='/allproducts' >Manage Products <ArrowNarrowRightIcon className='h-7 w-9 inline'></ArrowNarrowRightIcon> </Link>
        </div>
    );
};

export default Products;