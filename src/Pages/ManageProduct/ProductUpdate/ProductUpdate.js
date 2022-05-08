import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductDetails from '../../../hooks/useProductDetails';

const ProductUpdate = () => {
    const { productId } = useParams();
    const [product,setProduct]=useProductDetails(productId);
    const { img, name, description, quantity, supplier, price } = product;

    // const handleDelivered = () => {
    //     const newQty = parseInt(product.quantity) - 1;
    //     const quantity = newQty;
    //     console.log(quantity);
    //     const url = `http://localhost:5000/product/${productId}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(quantity)
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setProduct(data)
    //         })
    // }
    const handleDelivered=()=>{
        const {quantity, ...rest}=product;
        const newQty=parseInt(product.quantity)-1;
        const newProduct={quantity:newQty, ...rest};
        const url = `http://localhost:5000/product/${productId}`;
        fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newProduct)
                })
        .then(res=>res.json())
        .then(data=>{
            setProduct(data);
            console.log(data);

        })
    }
    return (
        <div className='container mx-auto text-lg'>
            <h2 className='text-3xl text-center font-extrabold'>Product Details</h2>
            <div className="flex md:flex-row flex-col items-center justify-evenly">
                <div className='w-1/2 md:pl-60'>
                    <img className='w-72 h-72' src={img} alt="" />
                </div>
                <div className='w-1/2'>
                    <p className='text-sm '>Supplier : <span className='font-semibold'>{supplier}</span></p>
                    <p className='text-xl font-semibold '>{name}</p>
                    <p className='text-lg font-semibold '>{price}</p>
                    <p className='text-sm '>Stock : <span className='font-semibold'>{quantity}</span></p>
                    <p className='font-semibold'>Description : <span className='font-normal'>{description}</span></p>
                    <div className='font-semibold text-lg my-4'>
                        {
                            quantity ? <p>Sold</p> : <p className='text-red-700'>Sold out</p>
                        }</div>
                    <button onClick={() => handleDelivered()} className="bg-rose-500 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded-full">Delivered</button>
                </div>
            </div>
            <form className=' mx-auto w-96 h-48 shadow-lg px-8 md:mx-96 mt-10'>
                <h2 className='text-center font-extrabold text-3xl'>Restock</h2>
                <div className="flex items-center justify-between mt-5">
                    <input className="block bg-white w-32 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="number" name="restock" min="1" max="100" placeholder='0' />
                    <input type="submit" value="Restock" className='bg-sky-500 rounded-xl py-2 px-14 font-semibold cursor-pointer hover:bg-sky-700 hover:text-white' />
                </div>
            </form>
            <Link className='text-blue-500 float-right mr-16 text-2xl font-semibold' to='/allproducts' >Manage Inventories <ArrowNarrowRightIcon className='h-7 w-9 inline'></ArrowNarrowRightIcon> </Link>
        </div>
    );
};

export default ProductUpdate;