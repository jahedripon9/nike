import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Nike Air Max Dawn',
    //   href: '/productdetails',
      imageSrc: 'https://i.ibb.co/n3KL29Y/air-max-dawn-shoe-gq9-GGH.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$192'
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://i.ibb.co/q0Lz7Jn/air-force-1-07-lv8-shoes-h-Sh6-R4.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35'
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://i.ibb.co/cNwcrZd/air-force-1-07-shoes-l-Ln274.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35'
    },
    {
      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://i.ibb.co/BCffbDy/air-pegasus-83-shoes-d-Rccxf.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35'
    },
    {
      id: 5,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://i.ibb.co/ZKHxD0z/air-zoom-pegasus-38-airnathan-bell-road-running-shoes-nd-NHTP.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
    },
    // More products...
  ]
  
  export default function Example() {
    const [products, setProducts]= useState([])
        useEffect(()=>{
            fetch('http://localhost:5000/nikekidsproducts')
            .then(rse => rse.json())
            .then(data => setProducts(data));
        },[])
    return (
      <div className="bg-white m-10  rounded-b-lg">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">All Kids's Shoes</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.img}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-700">
                    <Link to='/productdetails'><a >
                        <span aria-hidden="true" className="absolute inset-0" /> 
                        {product.name}
                      </a></Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-lg font-bold font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  