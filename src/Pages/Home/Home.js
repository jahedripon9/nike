import React from 'react';
import Header from '../Navigation/Header/Header'
import ProdcutBanner from '../../Pages/ProductBanner/ProductBanner'
import './Home.css'

const Home = () => {
    return (
        <div className='bg-zinc-500 m-10 rounded'>
            <Header></Header>
            <ProdcutBanner></ProdcutBanner>
        </div>
    );
};

export default Home;