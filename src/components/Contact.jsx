import React from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast';

const Contact = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {
        const userInput ={
            name:data.name,
            email:data.email,
            message:data.message
        }
        // action=""method='POST'
        try{
           axios.post(import.meta.env.VITE_POST_LINK,userInput)
           toast.success('Your message has been sent!!');
        }
        catch(error){
            toast.error('Something went wrong!!');
        }
    }

    return (
        <>
            <div name="Contact" className='max-w-screen-2xl container md:mx-auto px-4 pt-10 md:px-20 md:pt-10'>
                <h1 className='text-3xl font-bold mb-3'>Contact me</h1>
                <span>Please fill out the form below to contact me:</span>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-200 w-96 px-8 py-6 mt-20 rounded-xl conatact-bg'>
                        <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>Full Name:</label>
                            <input 
                            {...register("name", { required: true })}
                            className='shadow appearance-none border rounded-lg py-2 px-2 text-gray-700 leading-tight my-1 ' 
                            id='name' 
                            name='name' 
                            type="text" 
                            placeholder='Enter your Full Name' 
                            />
                            {errors.name && <span>This field is required</span>}
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700 '>Email:</label>
                            <input 
                            {...register("email", { required: true })}
                            className='shadow appearance-none border rounded-lg py-2 px-2 text-gray-700 leading-tight my-1 ' 
                            id='email' 
                            type="text" 
                            name='email' 
                            placeholder='Enter your Email' 
                            />
                            {errors.email && <span>This field is required</span>}
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>Message:</label>
                            <textarea 
                            {...register("message", { required: true })}
                            className='shadow appearance-none border rounded-lg py-2 px-2 text-gray-700 leading-tight my-1' 
                            id='message' 
                            type="text" 
                            name='message' 
                            placeholder='Enter your Message' 
                            />
                            {errors.message && <span>This field is required</span>}
                        </div>

                        <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-900 duration-300 contact-btn'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
