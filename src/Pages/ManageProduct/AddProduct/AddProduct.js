import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddProduct = () => {
    const [user] = useAuthState(auth);

    const handleAddProduct = event => {
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const supplier=event.target.supplier.value;
        const quantity=parseInt(event.target.quantity.value);
        const price=event.target.price.value;
        const img=event.target.img.value;
        const description=event.target.description.value;

        const add={name,email,supplier,quantity,price,img,description};
        if(add === true){
            window.confirm('Product Added Successfully Done!')
        }
        console.log(add);

        const url=`https://immense-reef-16580.herokuapp.com/product`;
        fetch(url,{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(add)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
        event.target.reset();
    }
    
    return (
        <div className="container mx-auto md:w-9/12 w-4/5 shadow-2xl my-10">
            <h2 className="text-center font-extrabold text-2xl">ADD Product</h2>
            <form onSubmit={handleAddProduct}className='md:w-9/12 w-full mx-auto'>

                <div className='flex flex-col md:flex-row justify-between items-center mt-5'>
                    <label htmlFor="name" className='text-lg '>Product Name: </label>
                    <input className="border rounded h-10 w-9/12 px-4 focus:outline-none" type="text" name="name" />
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center mt-5'>
                    <label htmlFor="email" className='text-lg '>Email: </label>
                    <input className="border rounded h-10 w-9/12 px-4 focus:outline-none" type="email" value={user.email} name="email" readOnly/>
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center mt-5'>
                    <label htmlFor="supplier" className='text-lg '>Supplier Name: </label>
                    <input className="border rounded h-10 w-9/12 px-4 focus:outline-none" type="text" value={user?.displayName} name="supplier" />
                </div>
                
                <div className='flex flex-col md:flex-row justify-between items-center mt-5'>
                    <label htmlFor="quantity" className='text-lg '>Stock: </label>
                    <input className="border rounded h-10 w-9/12 px-4 focus:outline-none" type="number" min="1" max='1000' name="quantity" />
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center mt-5'>
                    <label htmlFor="price" className='text-lg '>Price : </label>
                    <input className="border rounded h-10 w-9/12 px-4 focus:outline-none" type="text" name="price" />
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center mt-5'>
                    <label htmlFor="img" className='text-lg '>Image: </label>
                    <input className="border rounded h-10 w-9/12 px-4 focus:outline-none" type="url" name="img" placeholder='url'/>
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center mt-5'>
                    <label htmlFor="description" className='text-lg '>Description : </label>
                    <textarea  className="border rounded h-20 w-9/12 px-4 focus:outline-none" type="text" name="description" />
                </div>

                <button type="submit" className="text-white bg-rose-500 hover:bg-rose-800 my-9 focus:outline-none  font-medium rounded-lg text-sm w-auto md:mx-auto  px-5 py-2.5 ml-16 text-center">Add Product</button>
            </form>


        </div>
    );
};

export default AddProduct;