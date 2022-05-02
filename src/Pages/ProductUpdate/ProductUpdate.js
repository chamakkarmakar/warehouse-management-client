import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductUpdate = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div className='container mx-auto text-lg'>
            <h2 className='text-3xl text-center font-extrabold'>Product Details</h2>
            <div className="flex md:flex-row flex-col items-center justify-evenly">
                <div className='w-1/2 md:pl-60'>
                    <img className='w-72 h-72' src={product.img} alt="" />
                </div>
                <div className='w-1/2'>
                    <p className='text-sm '>Supplier : <span className='font-semibold'>{product.supplier}</span></p>
                    <p className='text-xl font-semibold '>{product.name}</p>
                    <p className='text-lg font-semibold '>{product.price}</p>
                    <p className='text-sm '>Stock : <span className='font-semibold'>{product.quantity}</span></p>
                    <p className='font-semibold'>Description : <span className='font-normal'>{product.description}</span></p>
                    <p className='font-semibold text-lg my-4'>{
                        product.quantity ? <p>Sold</p> : <p className='text-red-700'>Sold out</p>
                        }</p>
                    <button className="bg-rose-500 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded-full">Delivered</button>
                </div>
            </div>
            <form className=' mx-auto w-96 h-48 shadow-lg px-8 md:mx-96 mt-10'>
                <h2 className='text-center font-extrabold text-3xl'>Restock</h2>
                <div className="flex items-center justify-between mt-5">
                <input class="block bg-white w-32 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"  type="number" name="restock" min="1" max="100" placeholder='0'/>
                <input type="submit" value="Restock" className='bg-sky-500 rounded-xl py-2 px-14 font-semibold cursor-pointer hover:bg-sky-700 hover:text-white'/>
                </div>
            </form>
        </div>
    );
};

export default ProductUpdate;