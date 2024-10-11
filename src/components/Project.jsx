import React from 'react'
import card from '../assets/cardpic.avif'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'



const Project = () => {

    const projects = [
        {
            id:1,
            logo:logo1,
            name:"Book-store",
            view:"https://bookstore-frontend-93xw.onrender.com/",
            link:"https://github.com/Vijayzk/bookStore-Backend",
            desc:"Used Mern stack for developement for selling books."
        },
        {
            id:2,
            logo:logo2,
            name:"Notes",
            view:"https://noteapp-frontend-57uu.onrender.com/",
            link:"https://github.com/Vijayzk/NoteApp-Frontend",
            desc:"It's a MERN project which is used to write,update,delete notes."
        },
        {
            id:3,
            logo:logo3,
            name:"URLShortner",
            view:"https://shorturl-frontend.onrender.com/",
            link:"https://github.com/Vijayzk/shortUrl-Frontend",
            desc:"Its is a backend project used express,mongodb and ejs."
        },
        {
            id:4,
            logo:logo4,
            name:"E-Learninig",
            view:"https://e-learning-frontend-azure.vercel.app/",
            link:"https://github.com/Vijayzk/E-learningFrontend",
            desc:"It's a react based frontend project for course selling used bootstrap for UI."
        }, 
        {
            id:5,
            logo:logo5,
            name:"Student Database",
            view:"https://github.com/Vijayzk/SchoolDatabase",
            link:"https://github.com/Vijayzk/SchoolDatabase",
            desc:"Used EJS for client side rendering and NodeJs for Backend."
        },   
    ]

    return (
        <>
            <div name="Project" className='max-w-screen-2xl container pt-10 md:pt-14 md:pb-28 mx-auto px-4 my-20 md:px-20 space-y-4'>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Projects</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 my-5'>
                      {
                        projects.map(({id,logo,name,link,view,desc})=>(
                             <div key={id} className='md:w-[400px] md:h-[350px] border-[2px] rounded-lg p-1 md:mt-10 md:mb-10 cursor-pointer md:hover:scale-105 duration-200 px-2 pt-2'>
                                <img src={logo} className='w-full md:h-40 h-56 p-1 pb-10 md:pb-4' alt="" />
                                <div className='md:h-24'>
                                    <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                                    <p className='px-2 text-gray-500'>{desc}</p>
                                </div>
                                <div className='flex justify-between px-6 py-4'>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded'><a href={view} target='_blank'>View</a></button>
                                    <button className='bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded'><a href={link}>Source Code</a></button>
                                </div>
                             </div>
                        ))
                      }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
