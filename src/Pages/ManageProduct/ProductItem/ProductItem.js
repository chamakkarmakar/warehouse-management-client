import React, { useState } from 'react';

const ProductItem = ({product}) => {

    const { _id, img, price,  name, supplier, quantity } = product;
    const [products, setProducts] = useState([])
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
        <div>
            <div className="grid grid-cols-6 gap-x-4 gap-y-3 border-2 border-red-700 mt-7">
                <img src={img} alt="" className='h-24 w-24' />
                <p className='my-auto'>{name}</p>
                <p className='my-auto'>{supplier}</p>
                <p className='my-auto'>{quantity}</p>
                <p className='my-auto'>{price}</p>
                <button className='bg-orange-300 hover:bg-orange-400 rounded-lg my-6 mx-4' onClick={()=>handleDelete(_id)}>Delete</button>
            </div>
        </div>
    );
};

export default ProductItem;