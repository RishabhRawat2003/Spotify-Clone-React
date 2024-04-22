import React from 'react'
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaRegBell } from 'react-icons/fa';
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useSelector } from 'react-redux'

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
            <header className='w-full h-16 rounded-t-md flex justify-between items-center bg-[#121212]'>
                <span className='group ml-2 h-10 w-64 flex justify-center items-center bg-gray-900 rounded-full hover:border-white hover:border-[1px] sm:ml-5 sm:h-12 sm:w-72 lg:w-80'>
                    <IoSearch size={20} className='text-gray-500 group-hover:text-white rounded-full' />
                    <input type="text" id='search' placeholder='What do you want to listen?' className='rounded-md h-9 w-48 bg-gray-900 text-sm px-2 outline-none text-white sm:w-52 lg:text-lg lg:w-64' />
                    <RxCross2 size={20} className='text-gray-500 group-hover:text-white rounded-full cursor-pointer' />
                </span>
                <div className='w-auto h-full hidden sm:flex justify-center items-center gap-2 mr-2 md:mr-3'>
                    <div className='h-9 w-9 rounded-full bg-black flex justify-center items-center cursor-pointer active:scale-105 md:hover:scale-105 md:duration-300 sm:h-11 sm:w-11'>
                        <FaRegBell className='mx-1 text-white stroke-white' size={20} />
                    </div>
                    <div onClick={profileLogoHandle}  className='h-9 w-9 rounded-full bg-black flex justify-center items-center cursor-pointer active:scale-105 md:hover:scale-105 md:duration-300 sm:h-11 sm:w-11'>
                        <span className='w-6 h-6 border-[1px] bg-pink-600 text-black border-black rounded-full flex justify-center items-center sm:h-8 sm:w-8 select-none'>{user[0].toUpperCase()}</span>
                    </div>
                </div>
            </header>
            <div id='logoutDiv' className='w-40 h-48 justify-center bg-[#121212] rounded-md border-[2px] border-gray-800 z-50 flex-col text-white p-1 absolute right-2 shadow-xl shadow-gray-950 hidden sm:top-16 lg:w-44 lg:h-56'>
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
            <header className='w-full h-16 rounded-t-md flex justify-between items-center bg-[#121212]'>
                <span className='group ml-2 h-10 w-64 flex justify-center items-center bg-gray-900 rounded-full hover:border-white hover:border-[1px] sm:ml-5 sm:h-12 sm:w-72 lg:w-80'>
                    <IoSearch size={20} className='text-gray-500 group-hover:text-white rounded-full' />
                    <input type="text" id='search' placeholder='What do you want to listen?' className='rounded-md h-9 w-48 bg-gray-900 text-sm px-2 outline-none text-white sm:w-52 lg:text-lg lg:w-64' />
                    <RxCross2 size={20} className='text-gray-500 group-hover:text-white rounded-full cursor-pointer' />
                </span>
            </header>
        )
    }

}

export default Header