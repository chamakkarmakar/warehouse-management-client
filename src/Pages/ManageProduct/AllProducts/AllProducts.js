import { PencilAltIcon, PencilIcon, TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';

const AllProducts = () => {

    const navigate = useNavigate();
   
    const [products, setProducts] = useProducts();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const url = `https://nameless-wave-09337.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    const handleEdit = id => {
        navigate(`/product/${id}`);
    }
    
    return (
        <div className='container mx-auto'>
            <h1 className='text-red-700 text-3xl font-extrabold text-center my-3'>All Products</h1>
            <div className='flex justify-between'>
                <Link to='/myproduct' className='text-white font-bold py-3 px-6 bg-cyan-600 hover:bg-cyan-800  rounded-lg'>My Items</Link>
                <Link to='/addproduct' className='text-white font-bold py-3 px-6 bg-cyan-600 hover:bg-cyan-800  rounded-lg'>Add Product <PencilIcon className='inline w-5 h-5'></PencilIcon> </Link>
            </div>
            <div className="grid grid-cols-6 gap-x-4 gap-y-3 bg-orange-50 py-4 font-semibold text-xl mt-7">
                <h2> </h2>
                <h2>Product</h2>
                <h2>Quantity</h2>
                <h2>Price</h2>
                <h2>Supplier</h2>
                <h2> </h2>
            </div>
            <>
                {
                    products.map(product => <div key={product._id} className="grid grid-cols-6 gap-x-4 gap-y-3 border-2 border-red-700 mt-7 ">
                        <img src={product.img} alt="" className='h-24 w-24' />
                        <p className='my-auto'>{product.name}</p>
                        <p className='my-auto'>{product.quantity}</p>
                        <p className='my-auto'>{product.price}</p>
                        <p className='my-auto'>{product.supplier}</p>
                        <div className='flex md:flex-row flex-col justify-evenly items-center'>
                            <button className=' rounded-lg my-6 ml-8' onClick={() => handleDelete(product._id)}><TrashIcon className='inline w-8 h-8 text-red-700 hover:text-red-800 text-center'></TrashIcon> </button>
                            <button onClick={() => handleEdit(product._id)} className=' rounded-lg my-6 ml-8'><PencilAltIcon className='inline w-8 h-8 text-blue-700 hover:text-blue-800'></PencilAltIcon></button>
                        </div>
                    </div>)
                }
            </>
        </div>
    );
};

export default AllProducts;