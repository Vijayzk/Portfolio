import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";


const Footer = () => {
    return (
        <>
            <footer className='py-12'>
                <div className='max-w-screen-2xl container mx-auto px-4 my-20 md:px-20'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex space-x-4'>
                            <a href="https://www.facebook.com/" target="_blank"><FaSquareFacebook className='hover:scale-110 duration-200' size={24}/></a>
                            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank"><FaLinkedin className='hover:scale-110 duration-200' size={24}/></a>
                            <a href="https://github.com/Vijayzk" target="_blank"><FaSquareGithub className='hover:scale-110 duration-200' size={24}/></a>
                            <a href="https://www.instagram.com/" target="_blank"><FaInstagram className='hover:scale-110 duration-200' size={24}/></a>
                        </div>
                        <div className="mt-8 border-t border-gray-700 flex flex-col items-center">
                            <p className='mt-10 text-sm'>All rights reserved © 2024.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
