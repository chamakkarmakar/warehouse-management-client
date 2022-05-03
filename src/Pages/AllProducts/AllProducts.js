import React, { useEffect, useState } from 'react';
import Product from '../HomePage/Product/Product';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)})
    }, [])
    return (
        <div>
            <h1>All Products</h1>
            <div className='container grid md:grid-cols-3 grid-cols-1 grid-flow-row gap-6 mx-auto'>
                
                {
                    products.map(product => <Product 
                        key={product._id}
                        product={product}></Product>)
                }
                </div>
        </div>
    );
};

export default AllProducts;