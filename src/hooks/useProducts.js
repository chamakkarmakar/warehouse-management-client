import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://immense-reef-16580.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])
    return [products,setProducts];
};

export default useProducts;