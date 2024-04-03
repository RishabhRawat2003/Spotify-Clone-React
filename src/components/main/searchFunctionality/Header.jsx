import React from 'react'
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaRegBell } from 'react-icons/fa';
function Header() {

    return (
        <header className='w-full h-16 rounded-t-md flex justify-between items-center bg-[#121212]'>
            <span className='group ml-2 h-10 w-64 flex justify-center items-center bg-gray-900 rounded-full hover:border-white hover:border-[1px] sm:ml-5 sm:h-12 sm:w-72 lg:w-80'>
                <IoSearch size={20} className='text-gray-500 group-hover:text-white rounded-full' />
                <input type="text" id='search' placeholder='What do you want to listen?' className='rounded-md h-9 w-48 bg-gray-900 text-sm px-2 outline-none text-white sm:w-52 lg:text-lg lg:w-64' />
                <RxCross2 size={20} className='text-gray-500 group-hover:text-white rounded-full cursor-pointer' />
            </span>
            <div className='w-auto h-full flex justify-center items-center gap-2 mr-2 md:mr-3'>
                <div className='h-9 w-9 rounded-full bg-black flex justify-center items-center cursor-pointer active:scale-105 md:hover:scale-105 md:duration-300 sm:h-11 sm:w-11'>
                    <FaRegBell className='mx-1 text-white stroke-white' size={20} />
                </div>
                <div className='h-9 w-9 rounded-full bg-black flex justify-center items-center cursor-pointer active:scale-105 md:hover:scale-105 md:duration-300 sm:h-11 sm:w-11'>
                    <span className='w-6 h-6 border-[1px] border-gray-400 rounded-full flex justify-center items-center sm:h-8 sm:w-8'>U</span>
                </div>
            </div>
        </header>
    )
}

export default Header