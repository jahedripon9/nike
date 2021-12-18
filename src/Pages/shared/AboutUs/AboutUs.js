import React from 'react';
import Header from '../../Navigation/Header/Header';

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4">
            <Header></Header>
                <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
                    <img className="lg:w-4/5 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://i.ibb.co/WsKCZM7/how-many-miles-are-running-shoes-good-for.jpg"/>
                    <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">The Future of Possible</h1>
                    <p className="mb-8 leading-relaxed">Our mission is what drives us to do everything possible to expand human potential. We do that by creating groundbreaking sport innovations, by making our products more sustainably, by building a creative and diverse global team and by making a positive impact in communities where we live and work.

                    Based in Beaverton, Oregon, NIKE, Inc. includes the Nike, Converse, and Jordan brands.</p>
                    
                    </div>
                </div>
                </section>
        </div>
    );
};

export default AboutUs;