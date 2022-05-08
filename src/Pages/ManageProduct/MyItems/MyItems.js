import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const url = `http://localhost:5000/myitems?email=${user.email}`;
            const {data}=await axios.get(url);
            setItems(data);
        }
        getItems();
    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(product => product._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-2xl font-extrabold'>My Items</h2>
            <div className="grid grid-cols-6 gap-x-4 gap-y-3 bg-gray-50 py-4 font-semibold text-xl mt-7">
                <h2> </h2>
                <h2>Product</h2>
                <h2>Quantity</h2>
                <h2>Price</h2>
                <h2>Supplier</h2>
                <h2> </h2>
            </div>
            <>
                {
                    items.map(item => <div key={item._id} className="grid grid-cols-6 gap-x-4 gap-y-3 border-2 border-red-700 mt-7 ">
                        <img src={item.img} alt="" className='h-24 w-24' />
                        <p className='my-auto'>{item.name}</p>
                        <p className='my-auto'>{item.quantity}</p>
                        <p className='my-auto'>{item.price}</p>
                        <p className='my-auto'>{item.supplier}</p>
                        <div className='flex md:flex-row flex-col justify-evenly items-center'>
                            <button className=' rounded-lg my-6 ml-8' onClick={() => handleDelete(item._id)}><TrashIcon className='inline w-8 h-8 text-red-700 hover:text-red-800 text-center'></TrashIcon> </button>
                            <button  className=' rounded-lg my-6 ml-8'><PencilAltIcon className='inline w-8 h-8 text-blue-700 hover:text-blue-800'></PencilAltIcon></button>
                        </div>
                    </div>)
                }
            </>
        </div>
    );
};

export default MyItems;