import React from 'react';
import Loading from '../../SharedItems/Loading/Loading';
import AboutDairy from '../AboutDairy/AboutDairy';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Loading></Loading>
            <AboutDairy></AboutDairy>
            <Products></Products>
        </div>
    );
};

export default Home;