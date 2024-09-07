import React from 'react'
import banner from '/banner.png'
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
            <div  name="Home" >
            <div className='max-w-screen-2xl container mx-auto px-4 my-20 md:px-20'>
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
                        <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ex deserunt officiis animi culpa ipsum quidem omnis illo, id hic! Quasi vel illum id quo deserunt cupiditate, itaque, suscipit voluptatum autem soluta. Alias quisquam unde harum animi vitae ratione odio saepe aut laudantium repudiandae corrupti quas sunt, esse inventore, odit aspernatur distinctio magnam! A atque ab, animi ratione exercitationem tempora eaque! Quae vitae maxime quam. Temporibus provident rem unde aut sequi debitis numquam tempora eligendi accusamus. Et voluptates, sunt porro voluptatum distinctio at accusamus iste harum aliquam deserunt cupiditate iure voluptate.</p>
                        <br />
                        {/* Social media icons */}
                        <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:justify-between'>
                            <div className='space-y-2'>
                                <h1 className='font-bold text-center'>Available on</h1>
                                <ul className='flex space-x-5'>
                                    <li ><a href="https://www.facebook.com/" target="_blank"><FaSquareFacebook className='text-2xl cursor-pointer'/></a></li>
                                    <li ><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank"> <FaLinkedin  className='text-2xl cursor-pointer'/></a></li>
                                    <li ><a href="https://github.com/Vijayzk" target="_blank"><FaSquareGithub className='text-2xl cursor-pointer'/></a></li>
                                    <li ><a href="https://www.instagram.com/" target="_blank"> <FaInstagram className='text-2xl cursor-pointer'/></a></li>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold text-center'>Currently working on</h1>
                                <div className='flex space-x-5'>
                                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200' />
                                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200' />
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-40 md:mt-20 mt-8 order-1'>
                     <img src={banner} className='md:w-[450px] md:height-[450px]' alt="" />
                    </div>
                </div>
            </div>
            <hr />
        </div>
        </>
    )
}

export default Home
