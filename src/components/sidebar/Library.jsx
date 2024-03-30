import React from 'react'
import { useSelector } from 'react-redux'
import { MdOutlineLibraryMusic } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

function Library() {
    const toggle = useSelector((state) => state.sidebar.sidebarStatus)
    return (
        <div className={toggle ? 'bg-[#121212] h-[334px] w-[170px] mx-auto mt-1 rounded-lg flex flex-col justify-start items-center border-[1px] border-slate-500 gap-2' : 'bg-[#121212] h-full w-16 mx-auto mt-1 rounded-lg flex flex-col justify-start items-center border-[1px] border-slate-500 gap-2 md:border-none md:w-full'}>
            <div className={toggle ? 'group w-full h-10 my-1 flex justify-start items-center' : 'group w-full h-10 my-1 flex justify-start items-center'}>
                <MdOutlineLibraryMusic className={toggle ? 'text-gray-400 stroke-gray-400 cursor-pointer ml-3 mr-2 group-hover:text-white' : 'text-gray-400 stroke-gray-400 cursor-pointer group-hover:text-white mx-5'} size={30} />
                <span className='text-gray-400 font-semibold hidden cursor-pointer group-hover:text-white text-xl md:block'>Your Library</span>
                <span className='text-gray-400 font-semibold hidden cursor-pointer hover:text-white text-3xl md:block ml-4'>+</span>
                {
                    toggle && <span className='text-gray-400 font-semibold text-lg cursor-pointer group-hover:text-white'>Your Library</span>
                }
            </div>
            {
                toggle
                    ? <div className='my-2 flex w-full justify-start'>
                        <input type="text" placeholder='Search in Your Library' className='w-[93%] mx-auto h-7 bg-slate-900 text-white text-sm px-2 md:text-base outline-none focus:outline-white outline-[1px]' />
                    </div>
                    : <div className='my-2 flex w-full justify-center md:justify-start'>
                        <label htmlFor="library">
                        <IoIosSearch size={30} className='mx-1 text-gray-500 cursor-pointer hover:text-white' />
                        </label>
                        <input type="text" id='library' placeholder='Search in Your Library' className='w-[80%] bg-slate-900 hidden md:block text-white text-sm px-2 md:text-base outline-none focus:outline-white outline-[1px]' />
                    </div>

            }
        </div>
    )
}

export default Library