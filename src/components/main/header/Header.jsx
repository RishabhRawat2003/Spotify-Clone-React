import React from 'react'
import { GrInstallOption } from "react-icons/gr";
import { FaRegBell } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { BsBoxArrowUpRight } from "react-icons/bs";

function Header() {

    const user = useSelector((state) => state.userName.UserName)

    function profileLogoHandle(){
        let elem = document.getElementById('logoutDiv')
        elem.classList.toggle('hidden')
        elem.classList.toggle('flex')
    }

    if (user.length > 2) {
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
                        <div onClick={profileLogoHandle} className='h-9 w-9 rounded-full bg-black flex justify-center items-center cursor-pointer active:scale-105 md:hover:scale-105 md:duration-300 sm:h-11 sm:w-11'>
                            <span className='w-6 h-6 border-[1px] bg-pink-600 text-black border-black rounded-full flex justify-center items-center sm:h-8 sm:w-8 select-none'>{user[0].toUpperCase()}</span>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-white'></div>
                <div id='logoutDiv' className='w-40 h-48 justify-center bg-[#121212] rounded-md border-[2px] border-gray-800 z-50 flex-col text-white p-1 absolute top-14 right-2 shadow-xl shadow-gray-950 hidden sm:top-20 lg:w-44 lg:h-56'>
                    <p className='flex my-1 justify-between text-xs py-1.5 hover:bg-slate-700 font-semibold cursor-default px-1 lg:text-sm'>Account <BsBoxArrowUpRight size={15} className='text-white' /></p>
                    <p className='text-xs my-1 py-1.5 hover:bg-slate-700 font-semibold cursor-default px-1 lg:text-sm'>Profile</p>
                    <p className='text-xs my-1 flex justify-between py-1.5 hover:bg-slate-700 font-semibold cursor-default px-1 lg:text-sm'>Upgrade to Premium <BsBoxArrowUpRight size={15} className='text-white' /></p>
                    <p className='text-xs my-1 py-1.5 hover:bg-slate-700 font-semibold cursor-default px-1 lg:text-sm'>Settings</p>
                    <p className='w-full h-[1px] bg-slate-500'></p>
                    <p className='text-xs my-1 py-1.5 hover:bg-slate-700 font-semibold cursor-default px-1 lg:text-sm'>Logout</p>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className='h-16 w-full flex justify-end items-center rounded-t-md sm:h-20'>
                    <div className='w-[350px] mx-auto h-full flex justify-end items-center sm:mx-4 sm:w-auto sm:gap-3'>
                        <div className='h-10 w-40 flex justify-between items-center md:w-48'>
                            <p className='text-gray-400 font-semibold active:text-white md:hover:text-white active:scale-105 md:hover:scale-105 cursor-pointer'>Sign up</p>
                            <Link to='login' className='bg-white p-2 font-semibold rounded-3xl px-4 text-black active:scale-105 md:hover:scale-105 cursor-pointer md:px-7 md:p-3'>Log in</Link>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-white'></div>
            </>
        )
    }
}

export default Header