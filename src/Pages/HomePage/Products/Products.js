import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)})
    }, [])
    const sixProduct=products.slice(0,6);
    return (
        <div>
            <h1 className='text-2xl font-semibold'>Products:</h1>
            <div className='container grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-6 mx-auto'>
                
            {
                sixProduct.map(product => <Product 
                    key={product._id}
                    product={product}></Product>)
            }
            </div>
            <Link className='text-blue-500 float-right mr-16 text-2xl font-semibold' to='/allproducts' >Manage Inventories <ArrowNarrowRightIcon className='h-7 w-9 inline'></ArrowNarrowRightIcon> </Link>
        </div>
    );
};

export default Products;