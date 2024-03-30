import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from './header/Header'
import HomePlaylist from './homeplaylist/HomePlaylist'
import HomeArtists from './homeartists/HomeArtists'
import Footer from './footer/Footer'

function Home() {

  const [greetings, setGreetings] = useState('')
  const toggle = useSelector((state) => state.sidebar.sidebarStatus)


  useEffect(() => {
    function greet() {
      var time = new Date().getHours();
      if (time >= 0 && time < 12) {
        setGreetings('Good Morning')
      }
      else if (time >= 12 && time < 18) {
        setGreetings('Good Afternoon')
      }
      else {
        setGreetings('Good Evening')
      }
    }
    greet()
  }, [])

  return (
    <div className={toggle ? 'bg-[#121212] text-white rounded-md h-[98.7%] w-full flex flex-col mt-2 mr-1 ml-[84px] overflow-y-scroll' : 'bg-[#121212] rounded-md flex flex-col text-white h-[98.7%] w-full mt-2 mx-1 overflow-y-scroll'}>
      <div className='w-full h-auto'>
        <Header />
        <h1 className='my-3 mx-4 text-xl text-white font-bold sm:text-2xl md:text-3xl xl:text-4xl xl:mx-5'>{greetings}</h1>
        <HomePlaylist />
        <h1 className='my-3 mx-4 text-lg text-white font-bold sm:text-xl md:text-2xl xl:text-3xl xl:mx-5'>Made For (UserName)</h1>
        <HomeArtists />
        <Footer />
      </div>
    </div>
  )
}

export default Home