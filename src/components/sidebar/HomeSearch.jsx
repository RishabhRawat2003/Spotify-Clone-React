import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { MdHomeFilled } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

function HomeSearch() {

    const [home, setHome] = useState(true)
    const [search, setSearch] = useState(false)

    function handleHomeClick() {
        setHome(true)
        setSearch(false)
    }

    function handleSearchClick() {
        setSearch(true)
        setHome(false)
    }

    const toggle = useSelector((state) => state.sidebar.sidebarStatus)

    return (
        <div className={toggle ? 'bg-[#121212] h-36 w-[170px] mx-auto my-1 rounded-lg flex flex-col justify-center items-center border-[1px] border-slate-500 gap-2' : 'bg-[#121212] min-h-36 w-16 mx-auto my-1 rounded-lg flex flex-col justify-center items-center border-[1px] border-slate-500 gap-2 md:border-none md:w-full'}>
            <div className="group w-full h-12 flex justify-around items-center hover:cursor-pointer md:justify-between">
                <NavLink to=''>
                    <MdHomeFilled onClick={handleHomeClick} className={home ? 'text-white stroke-white group-hover:text-white group-hover:stroke-white md:ml-4' : 'text-gray-400 stroke-gray-400 group-hover:text-white group-hover:stroke-white md:ml-4'} size={40} />
                </NavLink>
                <NavLink to='' onClick={handleHomeClick} className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-400'} hidden font-semibold text-2xl mr-24 hover:text-white md:block`}>Home</NavLink>
                {
                    toggle && <NavLink to='' onClick={handleHomeClick} className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-400'} font-semibold text-2xl mr-7 hover:text-white`}>Home</NavLink>
                }
            </div>
            <div className="group w-full h-12 flex justify-around items-center hover:cursor-pointer md:justify-between">
                <NavLink to='Search'>
                    <IoIosSearch onClick={handleSearchClick} className={search ? 'text-white stroke-white group-hover:text-white group-hover:stroke-white md:ml-4' : 'text-gray-400 stroke-gray-400 group-hover:text-white group-hover:stroke-white md:ml-4'} size={40} />
                </NavLink>
                <NavLink to='Search' onClick={handleSearchClick} className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-400'} hidden font-semibold text-2xl mr-[90px] hover:text-white md:block`}>Search</NavLink>
                {
                    toggle && <NavLink to='Search' onClick={handleSearchClick} className={({ isActive }) => `${isActive ? 'text-white' : 'text-gray-400'} font-semibold hover:text-white text-2xl mr-6`}>Search</NavLink>
                }
            </div>
        </div>
    )
}

export default HomeSearch