import React from 'react'
import { useSelector } from 'react-redux'
import Header from './searchFunctionality/Header'
import SearchBody from './searchFunctionality/SearchBody'
import Footer from '../main/footer/Footer'

function Search() {

  const toggle = useSelector((state) => state.sidebar.sidebarStatus)


  return (
    <div className={toggle ? 'bg-[#121212] text-white rounded-md h-[98.7%] w-full flex flex-col mt-2 mr-1 ml-[84px] overflow-y-scroll' : 'bg-[#121212] rounded-md flex flex-col text-white h-[98.7%] w-full mt-2 mx-1 overflow-y-scroll'}>
      <div className='w-full h-auto'>
        <Header />
        <SearchBody />
        <Footer />
      </div>
    </div>
  )
}

export default Search