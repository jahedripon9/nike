import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://secret-tundra-51737.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div className="container mx-auto px-4">
            
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 bg-gray-300">Make an Admin</h1>
            <form onSubmit={handleAdminSubmit}>
            <label htmlFor="email" className="leading-7 text-sm text-gray-600"></label> <br />
            <input type="email" placeholder='Email' name="email " onBlur={handleOnBlur} className="w-2/5 bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    
            <button type="submit" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Make Admin</button>
            </form>
            {success && <span severity="success">Made Admin successfully!</span>}

            
          
    

            </div>
    );
};

export default MakeAdmin;

