import React from 'react'
import banner from '../assets/banner.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

const Home = () => {

    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 pt-20 md:pb-20 md:px-20 '>
                <div className="flex flex-col md:flex-row">
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'> Welcome In My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1 className='md:text-4xl text-xl'>Hello, I'm a </h1>
                            <span className='text-red-700 font-bold md:text-4xl text-xl'>
                                <ReactTyped strings={["Frontend Develpor.","Backend Developer.","Fullstack developer."]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true} />
                            </span>
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>Hello , my name is Vijay Anand and I am a BCA (Bachelor's of Computer Application) graduate . I am a 3rd year student seeking for opportunity in Full stack development or Backend development . I know Frontend development and can make responsive websites also I am a dedicated and results-oriented individual who thrives in fast-paced environments and enjoys collaborating with diverse teams.I believe in continuous learning and staying updated with industry trends to ensure I bring the most value to my work.</p>
                        <br />
                        {/* Social media icons */}
                        <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:justify-between md:pt-10 pt-4'>
                            <div className='space-y-2'>
                                <h1 className='font-bold text-center'>Available on</h1>
                                <ul className='flex space-x-5'>
                                    <li ><a href="https://www.facebook.com/" target="_blank"><FaSquareFacebook className='text-2xl cursor-pointer '/></a></li>
                                    <li ><a href="https://github.com/Vijayzk" target="_blank"><FaSquareGithub className='text-2xl cursor-pointer'/></a></li>
                                    <li ><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank"> <FaLinkedin  className='text-2xl cursor-pointer'/></a></li>
                                    <li ><a href="https://www.instagram.com/" target="_blank"> <FaInstagram className='text-2xl cursor-pointer'/></a></li>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold text-center'>Currently working on</h1>
                                <div className='flex space-x-5'>
                                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 text-green-500' />
                                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 text-green-500' />
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 text-blue-600' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-40 md:mt-20 mt-8 order-1'>
                     <img src={banner} className='md:w-[450px] md:height-[450px]' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
