import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, image, price, description, title } = product;
    const navigate = useNavigate();
    const navigateToProductDetails = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-2xl">
            <img className="w-full h-64" src={image} alt="" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
            {description}
          </p>
            </div>
            <div className="px-6 pt-4 pb-2">Price:
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{price}</span>
                <button onClick={()=> navigateToProductDetails(id)} className="bg-rose-500 hover:bg-rose-800 text-white font-bold py-2 px-4 rounded-full">
                    GO TO
                </button>
            </div>
        </div>
    );
};

export default Product;