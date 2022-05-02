import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const sixProduct=products.slice(0,6);
    return (
        <div className='mb-9'>
            <h1 className='text-2xl font-semibold'>Products:</h1>
            <div className='container grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-6 mx-auto'>
                
            {
                sixProduct.map(product => <Product 
                    key={product.id}
                    product={product}></Product>)
            }
            </div>
        </div>
    );
};

export default Products;