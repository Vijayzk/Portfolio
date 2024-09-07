import React from 'react'
import card from '/cardpic.avif'

const Project = () => {

    const projects = [
        {
            id:1,
            logo:card,
            name:"Book-store App",
            view:"https://bookstore-frontend-93xw.onrender.com/",
            link:"https://github.com/Vijayzk/bookStore-Backend",
            desc:"Used Mern stack for developement."
        },
        {
            id:2,
            logo:card,
            name:"Tech Courses App ",
            view:"https://e-learning-frontend-azure.vercel.app/",
            link:"https://github.com/Vijayzk/E-learningFrontend",
            desc:"It's a react based frontend project."
        },
        {
            id:3,
            logo:card,
            name:"School Database",
            view:" ",
            link:"https://github.com/Vijayzk/SchoolDatabase",
            desc:"Its is a backend project used express,mongodb and ejs."
        },
        {
            id:4,
            logo:card,
            name:"To-Do App",
            view:"https://to-do-iota-beige.vercel.app/",
            link:"https://github.com/Vijayzk/toDo",
            desc:"It's a react based frontend project."
        }
    ]

    return (
        <>
            <div name="Project" className='max-w-screen-2xl container mx-auto px-4 my-20 md:px-20 space-y-4'>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Projects</h1>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
                      {
                        projects.map(({id,logo,name,link,view,desc})=>(
                             <div key={id} className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg p-1 cursor-pointer hover:scale-110 duration-200'>
                                <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' alt="" />
                                <div>
                                    <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                                    <p className='px-2 text-gray-700'>{desc}</p>
                                </div>
                                <div className='flex justify-between px-6 py-4'>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded'><a href={view}>View</a></button>
                                    <button className='bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded'><a href={link}>Source Code</a></button>
                                </div>
                             </div>
                        ))
                      }
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Project
