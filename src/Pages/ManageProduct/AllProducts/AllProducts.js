import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../ProductItem/ProductItem';

const AllProducts = () => {
    const { productId } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => setProducts(data))

        }
    }
    return (
        <div >
            <h1 className='text-red-700 text-3xl font-semibold text-center'>All Products</h1>
            <div className="container mx-auto">
            <div className="flex justify-between items-center bg-gray-300 font-bold">
                <p className='w-44 h-20 mt-3'></p>
                <p className='w-28'>Product Name</p>
                <p>Supplier</p>
                <p>Quantity</p>
                <p>Price</p>
                <p>Delete</p>
            </div>
            <div>
                {
                    products.map(product => <ProductItem
                        key={product._id}
                        product={product}></ProductItem>)
                }
                    <button onClick={() => handleDelete(productId)} className='text-blue-600'>Delete</button>
            </div>
            </div>

        </div>
    );
};

export default AllProducts;