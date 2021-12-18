import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './NikeAddShoes.css'

const NikeProductsAdd = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://secret-tundra-51737.herokuapp.com/nikeproducts', data)
        axios.post('https://secret-tundra-51737.herokuapp.com/nikewomanproducts', data)
        axios.post('https://secret-tundra-51737.herokuapp.com/nikekidsproducts', data)
        axios.post('https://secret-tundra-51737.herokuapp.com/nikecollectionsproducts', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Successfully Nike Official Items')
                reset();
            }
        })
    }
    return (
        <div className="container mx-auto px-4">
                 <img className='lg:w-80 rounded-full mx-auto' src="https://i.ibb.co/vxvSvJk/Nike-logo.png" alt="" />
            <div className='add-product pb-16 text-red-500 '>
                <h2 className='font-bold text-5xl my-5 underline'>Add Nike Official Products</h2>
                 <form onSubmit={handleSubmit(onSubmit)} className='text-2xl  text-center mb-28'>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name'  className='text-left '/>
                <input {...register("description")} placeholder='Description' className='text-left '/>
                <input type="number" {...register("price")} placeholder='Price' className='text-left '/>
                <input {...register("img")} placeholder='Img Url'className='text-left '/>
                <input type="submit" className='bg-green-400 rounded-xl hover:bg-green-600 text-white '/>
                </form>
            </div>
        </div>

    );
};

export default NikeProductsAdd;