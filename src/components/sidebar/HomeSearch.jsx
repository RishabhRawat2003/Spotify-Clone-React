import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { MdHomeFilled } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

function HomeSearch() {


    const toggle = useSelector((state) => state.sidebar.sidebarStatus)

    return (
        <div className={toggle ? 'bg-[#121212] h-36 w-[170px] mx-auto my-1 rounded-lg flex flex-col justify-center items-center border-[1px] border-slate-500 gap-2' : 'bg-[#121212] min-h-36 w-16 mx-auto my-1 rounded-lg flex flex-col justify-center items-center border-[1px] border-slate-500 gap-2 md:border-none md:w-full'}>
            <div className={toggle ? "group w-full h-12 flex justify-start ml-5 items-center hover:cursor-pointer" : "group w-full h-12 flex justify-center items-center hover:cursor-pointer md:justify-start"}>
                <NavLink to='' className={({ isActive }) => `${isActive ? 'text-white stroke-white' : 'text-gray-400 stroke-gray-400'} md:ml-4`}>
                    <MdHomeFilled className='group-hover:text-white group-hover:stroke-white' size={40} />
                </NavLink>
                <NavLink to='' className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-400'} hidden font-semibold text-2xl group-hover:text-white md:flex md:h-full items-center md:ml-4 md:w-full`}>Home</NavLink>
                {
                    toggle && <NavLink to='' className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-400'} ml-3 font-semibold text-2xl group-hover:text-white`}>Home</NavLink>
                }
            </div>
            <div className={toggle ? "group w-full h-12 flex justify-start ml-5 items-center hover:cursor-pointer" : "group w-full h-12 flex justify-center items-center hover:cursor-pointer md:justify-start"}>
                <NavLink to='Search' className={({ isActive }) => `${isActive ? 'text-white stroke-white' : 'text-gray-400 stroke-gray-400'} md:ml-4`}>
                    <IoIosSearch className='group-hover:text-white group-hover:stroke-white' size={40} />
                </NavLink>
                <NavLink to='Search' className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-400'} hidden font-semibold text-2xl group-hover:text-white md:flex md:h-full items-center md:ml-4 md:w-full`}>Search</NavLink>
                {
                    toggle && <NavLink to='Search' className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-400'} ml-3 font-semibold text-2xl group-hover:text-white`}>Search</NavLink>
                }
            </div>
        </div>
    )
}

export default HomeSearch