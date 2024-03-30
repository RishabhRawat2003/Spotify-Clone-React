import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { useSelector } from 'react-redux'

function Logo() {
  const toggle = useSelector((state) => state.sidebar.sidebarStatus)



  return (
    <div className={toggle ? 'bg-[#121212] h-16 w-[170px] mx-auto my-1 rounded-lg gap-2 flex justify-center items-center cursor-pointer border-[1px] border-slate-500' : 'bg-[#121212] min-h-16 w-16 mx-auto my-1 rounded-lg flex justify-center items-center cursor-pointer border-[1px] border-slate-500 md:border-none md:w-60'}>
      <FontAwesomeIcon icon={faSpotify} size='2xl' style={{ color: "#ffffff", }} />
      <span className='text-white font-bold text-2xl hidden mx-5 md:block'>Spotify</span>
      {toggle && <span className='text-white font-bold text-2xl'>Spotify</span>}
    </div>
  )
}

export default Logo