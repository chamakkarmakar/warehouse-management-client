import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../SharedItems/Loading/Loading';
import AboutDairy from '../AboutDairy/AboutDairy';
import Banner from '../Banner/Banner';
import Produced from '../Produced/Produced';
import Products from '../Products/Products';


const Home = () => {
    const [loading] = useAuthState(auth);

    if(loading){
        <Loading></Loading>
    }
    return (
        <div>
            <Banner></Banner>
            <Loading></Loading>
            <AboutDairy></AboutDairy>
            <Products></Products>
            <Produced></Produced>
        </div>
    );
};

export default Home;