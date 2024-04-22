import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";

function Footer() {
    return (
        <>
            <div className='mt-10 w-full h-auto flex flex-col lg:flex-row'>
                <div className='w-full h-52 flex justify-between lg:w-[60vw]'>
                    <div className='flex flex-col w-26 h-auto ml-7'>
                        <h1 className='text-base font-bold lg:text-lg'>Company</h1>
                        <p className='text-gray-500 active:text-white md:hover:text-white cursor-pointer duration-200 md:hover:underline underline-offset-2 mt-2'>About</p>
                        <p className='text-gray-500 active:text-white md:hover:text-white cursor-pointer duration-200 md:hover:underline underline-offset-2 mt-1'>Jobs</p>
                        <p className='text-gray-500 active:text-white md:hover:text-white cursor-pointer duration-200 md:hover:underline underline-offset-2 mt-1'>For the Record</p>
                    </div>
                    <div className='flex flex-col w-26 h-auto mr-7'>
                        <h1 className='text-base font-bold lg:text-lg'>Communities</h1>
                        <p className='text-gray-500 active:text-white md:hover:text-white cursor-pointer duration-200 md:hover:underline underline-offset-2 mt-2'>For Artists</p>
                        <p className='text-gray-500 active:text-white md:hover:text-white cursor-pointer duration-200 md:hover:underline underline-offset-2 mt-1'>Developer</p>
                        <p className='text-gray-500 active:text-white md:hover:text-white cursor-pointer duration-200 md:hover:underline underline-offset-2 mt-1'>Advertising</p>
                        <p className='text-gray-500 active:text-white md:hover:text-white cursor-pointer duration-200 md:hover:underline underline-offset-2 mt-1'>Investors</p>
                        <p className='text-gray-500 active:text-white md:hover:text-white cursor-pointer duration-200 md:hover:underline underline-offset-2 mt-1'>Vendors</p>
                    </div>
                    <div className='w-26 h-auto hidden mr-7 sm:flex sm:flex-col'>
                        <h1 className='text-base font-bold lg:text-lg'>Useful Links</h1>
                        <p className='text-gray-500 active:text-white md:hover:text-white cursor-pointer duration-200 md:hover:underline underline-offset-2 mt-2'>Support</p>
                        <p className='text-gray-500 active:text-white md:hover:text-white cursor-pointer duration-200 md:hover:underline underline-offset-2 mt-1'>Free Mobile App</p>
                    </div>
                </div>
                <div className='my-3 w-full h-16 flex justify-center items-center lg:w-[40vw] lg:justify-end'>
                    <span className='w-14 h-14 rounded-2xl flex justify-center items-center bg-gray-700 md:hover:bg-gray-800 active:bg-gray-800 mx-2 cursor-pointer'><FaInstagram size={40} className='text-white' /></span>
                    <span className='w-14 h-14 rounded-2xl flex justify-center items-center bg-gray-700 md:hover:bg-gray-800 active:bg-gray-800 mx-2 cursor-pointer'><FaXTwitter size={30} className='text-white' /></span>
                    <span className='w-14 h-14 rounded-2xl flex justify-center items-center bg-gray-700 md:hover:bg-gray-800 active:bg-gray-800 mx-2 cursor-pointer'><CiFacebook size={40} className='text-white' /></span>
                </div>
            </div>
            <div className='h-[1px] w-[90%] bg-white mx-auto'></div>
            <div className='flex flex-col w-full h-auto mb-4 lg:flex-row'>
                <div className='h-14 w-full flex justify-between items-center px-3 lg:w-[60vw]'>
                    <span className='text-gray-500 cursor-pointer md:hover:text-white duration-200 text-sm active:text-white'>Legal</span>
                    <span className='text-gray-500 cursor-pointer md:hover:text-white duration-200 text-sm active:text-white'>Privacy Center</span>
                    <span className='text-gray-500 cursor-pointer md:hover:text-white duration-200 text-sm active:text-white'>Privacy Policy</span>
                    <span className='text-gray-500 cursor-pointer md:hover:text-white duration-200 text-sm active:text-white hidden sm:block'>Cookies</span>
                    <span className='text-gray-500 cursor-pointer md:hover:text-white duration-200 text-sm active:text-white hidden md:block'>About Ads</span>
                    <span className='text-gray-500 cursor-pointer md:hover:text-white duration-200 text-sm active:text-white hidden lg:block'>Accessibility</span>

                </div>
                <div className='w-full flex justify-center items-center lg:w-[30vw] lg:justify-end'>
                    <span className='text-gray-500 mr-9'>© 2024 Spotify Clone</span>
                </div>
            </div>
        </>
    )
}

export default Footer