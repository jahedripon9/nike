import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Gallery2 from "../shared/Gallery/Gallery2";

export default function Example() {
    const [products, setProducts]= useState([])
        useEffect(()=>{
            fetch('http://localhost:5000/nikewomanproducts')
            .then(rse => rse.json())
            .then(data => setProducts(data));
        },[])
    return (
      <div className="bg-white m-10  rounded-b-lg">
        <Gallery2></Gallery2>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl  font-extrabold tracking-tight text-gray-900">All Women's Shoes</h2>
  
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
          <img src="https://i.ibb.co/yspWjRL/image.png" alt="" />
        </div>
      </div>
    )
  }