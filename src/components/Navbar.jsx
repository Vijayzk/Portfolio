import React, { useEffect, useState } from 'react'
import pic from '../assets/pic.avif'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-scroll'



const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const element = document.documentElement;
    useEffect(() => {
        if (theme == "dark") {
            localStorage.setItem("theme", "dark")
            document.body.classList.add("dark")
        }
        else {
            localStorage.setItem("theme", "light")
            document.body.classList.remove("dark")
        }
    }, [theme])

    const navItems = [
        {
            id: 1,
            text:"Home"
        },
        {
            id: 2,
            text:"About"
        },
        {
            id: 3,
            text:"Project"
        },
        {
            id: 4,
            text:"Contact"
        },
    ]


    return (
        <>
            <div className="max-w-screen-2xl h-16 mx-auto px-4 md:px-16 shadow-lg fixed left-0 right-0 z-50 nav-bg">
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <img src={pic} alt="" className='h-14 w-14 rounded-full mt-1' />
                        <h1 className='font-semibold text-xl cursor-pointer py-2'>Vijay <span className='text-green-500'>Anand</span><p className='text-xs md:text-sm'>Fullstack || Frontend || Backend</p></h1>
                    </div>
                    <div className='flex space-x-4 md:space-x-8'>
                        <ul className='hidden md:flex space-x-6'>
                            {

                                navItems.map(({ id, text }) => (
                                    <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active' className='hover:scale-105 duration-200 cursor-pointer' key={id}>{text}</Link>
                                ))
                            }
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden order-2'>
                            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                        </div>
                        <label className="swap swap-rotate order-1">
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" className="theme-controller" value="synthwave" />

                            {/* sun icon */}
                            <svg
                                className="swap-off h-5 w-5 md:h-7 md:w-7 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                                className="swap-on h-5 w-5 md:h-7 md:w-7 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            >
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                    </div>
                </div>

                {/* Mobile Navbar */}
                {
                    menu && (
                        <div className='bg-white nav-bg'>
                            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 '>
                                {

                                    navItems.map(({ id, text }) => (
                                        <Link to={text} smooth={true} duration={500} offset={-70} activeClass='active' className='hover:scale-105 duration-200 cursor-pointer font-semibold' key={id} onClick={() => setMenu(!menu)}>{text}</Link>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Navbar
Navbar