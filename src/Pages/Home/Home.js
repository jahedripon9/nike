import React from 'react';
import Header from '../Navigation/Header/Header'
import ProdcutBanner from '../../Pages/ProductBanner/ProductBanner'
import Product from '../../Pages/Product/Product'
// import ProductDetails from '../../Pages/ProductDetails/ProductDetails'
import './Home.css'

const Home = () => {
    return (
        <div className='bg-white m-10 rounded'>
            <ProdcutBanner></ProdcutBanner>
            <Product></Product>
            {/* <ProductDetails></ProductDetails> */}
        </div>
    );
};

export default Home;