import React from 'react'
import { GrInstallOption } from "react-icons/gr";
import { FaRegBell } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Header() {
    return (
        <>
            <div className='h-16 w-full flex justify-end items-center rounded-t-md sm:h-20'>
                <div className='w-[350px] mx-auto h-full flex justify-between items-center sm:mx-4 sm:w-auto sm:gap-3'>
                    <div className='w-32 h-8 text-sm font-semibold ml-2 bg-white rounded-full text-black flex justify-center cursor-pointer items-center active:scale-105 md:hover:scale-105 md:duration-300 sm:h-10 sm:w-36 lg:h-12 lg:w-44 lg:text-base'>
                        Explore Premium
                    </div>
                    <Link to='https://www.spotify.com/in-en/download/windows/'>
                        <div className='w-32 h-8 text-sm font-semibold hidden bg-black rounded-full text-white sm:flex justify-center cursor-pointer items-center active:scale-105 md:hover:scale-105 md:duration-300 sm:h-10 sm:gap-2 sm:w-36 lg:h-12 lg:w-44 lg:text-base'>
                            <GrInstallOption className='mx-1 text-white stroke-white' size={20} />
                            Install App
                        </div>
                    </Link>
                    <div className='h-9 w-9 rounded-full hidden bg-black justify-center items-center cursor-pointer active:scale-105 active:bg-gray-700 md:hover:scale-105 md:duration-300 sm:flex sm:h-11 sm:w-11'>
                        <FaRegBell className='mx-1 text-white stroke-white' size={20} />
                    </div>
                    <div className='h-9 w-9 rounded-full bg-black flex justify-center items-center cursor-pointer active:scale-105 md:hover:scale-105 md:duration-300 sm:h-11 sm:w-11'>
                        <span className='w-6 h-6 border-[1px] border-gray-400 rounded-full flex justify-center items-center sm:h-8 sm:w-8'>U</span>
                    </div>
                </div>
            </div>
            <div className='w-full h-[1px] bg-white'></div>
        </>
    )
}

export default Header