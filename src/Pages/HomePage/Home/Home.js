import React from 'react';
import Loading from '../../SharedItems/Loading/Loading';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Loading></Loading>

            <Products></Products>
        </div>
    );
};

export default Home;