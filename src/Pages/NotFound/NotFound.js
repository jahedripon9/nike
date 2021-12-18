import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="py-5">
           
            <h1 className="text-red-600 font-bold text-8xl italic oops">Oops!</h1>
            <h3 className="text-red-600 font-bold text-6xl my-7">404</h3>
            <h3 className="text-red-600 text-6xl font-bold  pb-5">Page Not Found</h3>
            <p className="font-bold pb-5 text-3xl">The page you are looking for might have been removed <br /> had its name changed or is temporarily unavailable.</p>
            <Link className='pl-4 text-decoration-none  te p-3 bg-blue-500 rounded-full text-white font-bold' to='/'> Go to Homepage</Link>
        </div>
    );
};

export default NotFound;