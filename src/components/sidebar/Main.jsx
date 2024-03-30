import React from 'react'
import Logo from './Logo'
import HomeSearch from './HomeSearch'
import Bars from './Bars'
import { useSelector } from 'react-redux'
import Library from './Library'

function Main() {
    const toggle = useSelector((state) => state.sidebar.sidebarStatus)

    return (
        <>
            <div className={toggle ?'w-44 h-[98.7%] mt-2 mx-2 flex flex-col justify-start absolute z-20' :'w-16 h-[98.7%] mt-2 mx-2 flex flex-col justify-start md:w-60'}>
            <Logo />
            <Bars />
            <HomeSearch />
            <Library />
        </div >
        </>
    )
}

export default Main