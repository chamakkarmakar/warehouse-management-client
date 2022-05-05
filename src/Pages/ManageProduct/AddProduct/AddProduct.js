import React from 'react';

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const name=event.target.name.value;
        const supplier=event.target.supplier.value;
        const quantity=parseInt(event.target.quantity.value);
        const price=parseInt(event.target.price.value);
        const img=event.target.img.value;
        const description=event.target.description.value;

        const add={name,supplier,quantity,price,img,description};
        console.log(add);

        const url=`http://localhost:5000/product`;
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



        // console.log({name,supplier,quantity,price,img,description});
    }
    
    return (
        <div className="max-w-2xl mx-auto bg-white p-16">
            <h2 className="text-center text-2xl">ADD Product</h2>
            <form onSubmit={handleAddProduct}>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div>

                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="name" placeholder="Product Name" required />
                    </div>
                    <div>

                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="supplier" placeholder="Supplier Name" required />
                    </div>
                    <div>

                        <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="quantity" placeholder="quantity" required />
                    </div>
                    <div>

                        <input type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="price" placeholder="Price" required />
                    </div>
                    <div>

                        <input type="url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="img" placeholder="Image url" required />
                    </div>
                    <div>

                        <textarea type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="description" placeholder="description" required />
                    </div>
                </div>


                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>


        </div>
    );
};

export default AddProduct;