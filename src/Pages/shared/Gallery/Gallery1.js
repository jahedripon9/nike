import React from 'react';

const Gallery1 = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto flex flex-wrap">
                    <div className="lg:w-full mx-auto mt-12">
                    <div className="flex flex-wrap lg:w-full lg:bg-gray-100 lg:py-72 px-28 relative mb-2 ">
                        <img alt="gallery" className="lg:w-full object-cover sm:h-full object-center block opacity-100 absolute inset-0" src="https://i.ibb.co/MNZxcyd/men-s-shoes-clothing-accessories.jpg"/>
                        
                    </div>
                    
                    </div>
                    <div className="lg:w-full mx-auto">
                    <div className="flex flex-wrap lg:w-full lg:bg-gray-100 lg:py-72 px-28 relative mb-8">
                        <img alt="gallery" className="lg:w-full object-cover sm:h-full object-center block opacity-100 absolute inset-0" src="https://i.ibb.co/Y8nt2pT/men-s-shoes-clothing-accessories.jpg"/>
                        
                    </div>
                    
                    </div>
                </div>
                </section>
        </div>
    );
};

export default Gallery1;