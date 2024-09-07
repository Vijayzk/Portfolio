import React, { useState} from 'react'
import pic from '/pic.avif'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll"



const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Project"
        },
        {
            id: 4,
            text: "Contact"
        }
    ]
    return (
        <>
            <div className="max-w-screen-2xl container h-16 mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <img src={pic} alt="" className='h-16 w-16 rounded-full' />
                        <h1 className='font-semibold text-xl cursor-pointer py-2'>Vijay <span className='text-green-500'>Anand</span><p className='text-xs md:text-sm'>Fullstack || Frontend || Backend</p></h1>
                    </div>
                    <div className='flex'>
                        <ul className='hidden md:flex space-x-8'>
                            {

                                navItems.map(({ id, text }) => (
                                    <Link to={text} className='hover:scale-105 duration-200 cursor-pointer' key={id}>{text}</Link>
                                ))
                            }
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden'>
                            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                        </div>
                    </div>
                </div>

                {/* Mobile Navbar */}
                {
                    menu && (
                        <div className='bg-white' >
                            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3'>
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