import React from 'react';

const ProductItem = ({product}) => {

    const {  img, price,  name, supplier, quantity } = product;

   
    return (
        <div>
            <div className='border-2  w-full h-28 mb-3'>
                <div className="flex justify-between items-center">
                    <img className='w-32 h-20 mt-3' src={img} alt="" />
                    <p className='w-28'>{name}</p>
                    <p>{supplier}</p>
                    <p>{quantity}</p>
                    <p>{price}</p>
                </div>
                
            </div>
        </div>
    );
};

export default ProductItem;