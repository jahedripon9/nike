import React from 'react';
import Header from '../../Navigation/Header/Header';

const ContactUs = () => {
    return (
        <div className="container mx-auto  px-4">
            <Header></Header>
           <section className="text-gray-600 body-font relative">
           <h1 className="title-font font-bold  mt-10 text-gray-900  text-4xl">Countact Us</h1>
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-full md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md mx-auto">
                    <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg">ADDRESS</h2>
                    <p className="mt-1">Headquarters. Address: 14th Floor, <br /> West Wing, Skyworth Semiconductor Design Building, No. 18 Gaoxin South 4th Ave,  Nanshan District, Shenzhen, China, 518057</p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg">EMAIL</h2>
                    <span className="text-indigo-500 leading-relaxed">inform@nike.com</span>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-lg mt-4">PHONE</h2>
                    <p className="leading-relaxed"> +86 (0)755 26656677</p>
                    </div>
                </div>
                </div>
                
            </div>
            </section>
        </div>
    );
};

export default ContactUs;