import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])
   
    return (
        <div className='container mx-auto'>
            <h1 className='text-red-700 text-3xl font-extrabold text-center my-3'>All Products</h1>
            <div className="grid grid-cols-6 gap-x-4 gap-y-3 bg-orange-50 py-4 font-semibold text-xl">
                <h2></h2>
                <h2>Product</h2>
                <h2>Supplier</h2>
                <h2>Quantity</h2>
                <h2>Price</h2>
                <h2></h2>
            </div>
            <>
                {
                    products.map(product=><ProductItem
                    key={product._id}
                    product={product}
                    ></ProductItem>)
                }
            </>
            

        </div>
    );
};

export default AllProducts;