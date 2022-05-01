import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const sixProduct=products.slice(0,6);
    return (
        <div>
            <h1 className='text-2xl font-semibold'>Products:</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-6'>
            {
                
                sixProduct.map(product => <Product 
                    key={product.id}
                    product={product}></Product>)
            }
                {/* {products.slice(0,6)} */}
            </div>
        </div>
    );
};

export default Products;