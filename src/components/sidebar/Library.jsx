import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MdOutlineLibraryMusic } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import apiFunc from '../../apifunctions/Apifunction'
import { Link } from 'react-router-dom';

function Library() {
    const [data , setData] = useState([])
    const toggle = useSelector((state) => state.sidebar.sidebarStatus)

    useEffect(() => {
        let token = apiFunc.getToken()
        token.then((val)=>{
            let sidebarArtists = apiFunc.getNavArtists(val)
            sidebarArtists.then((val)=>{
                let artistList = val.artists
                setData(artistList)
            })
        })
    }, [])



    return (
        <div className={toggle ? 'bg-[#121212] h-[334px] w-[170px] mx-auto mt-1 rounded-lg flex flex-col justify-start items-center border-[1px] border-slate-500 gap-2 overflow-y-scroll' : 'bg-[#121212] h-full w-16 mx-auto mt-1 rounded-lg flex flex-col justify-start items-center border-[1px] border-slate-500 overflow-y-scroll gap-2 md:border-none md:w-full'}>
            <div className={toggle ? 'group w-full h-10 my-1 flex justify-start items-center' : 'group w-full h-10 my-1 flex justify-start items-center'}>
                <MdOutlineLibraryMusic className={toggle ? 'text-gray-400 stroke-gray-400 cursor-pointer ml-3 mr-2 group-hover:text-white' : 'text-gray-400 stroke-gray-400 cursor-pointer group-hover:text-white mx-5 mt-2'} size={30} />
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
            {
                toggle
                    ? <div className='w-full flex h-10 cursor-pointer' >
                        <img src="https://misc.scdn.co/liked-songs/liked-songs-64.png" alt="img" className='object-cover mx-2 rounded-md' />
                        <div className='h-full w-auto flex flex-col'>
                            <p className='text-white font-semibold text-sm'>Liked Songs</p>
                            <p className='text-gray-500 flex text-xs gap-0.5 items-center'><TiPin size={20} className='text-green-500' /> Playlist</p>
                        </div>
                    </div>
                    : <div className='w-full flex h-12 justify-center cursor-pointer mb-3 md:justify-start md:h-14' >
                        <img src="https://misc.scdn.co/liked-songs/liked-songs-64.png" alt="img" className='object-cover mx-2 mr-3 rounded-md' />
                        <div className='h-full w-auto hidden md:flex md:flex-col'>
                            <p className='text-white font-semibold text-lg'>Liked Songs</p>
                            <p className='text-gray-500 flex text-sm gap-0.5 items-center'><TiPin size={30} className='text-green-500' /> Playlist</p>
                        </div>
                    </div>
            }
            {
                toggle
                ? data && data.length > 1 
                ? data.map((items)=>(
                    <Link to={`sidebarartiststracks/` + items.id} key={items.id} className='w-full h-10 my-4 rounded-full flex justify-start items-center'>
                        <img src={items.images[0].url} alt="img" className='object-cover w-14 h-14 rounded-full'/>
                        <div className='w-auto h-full mx-2 flex flex-col'>
                            <p className='text-xs text-white font-semibold'>{items.name}</p>
                            <p className='text-xs text-gray-500 font-semibold'>{items.type.toUpperCase()}</p>
                        </div>
                    </Link>
                )): <div>Loading</div>
                : data && data.length > 1 
                ? data.map((items)=>(
                    <Link to={`sidebarartiststracks/` + items.id} key={items.id} className='w-full h-10 my-4 rounded-full flex justify-center items-center md:justify-start'>
                        <img src={items.images[0].url} alt="img" className='object-cover w-16 h-16 rounded-full'/>
                        <div className='w-auto h-full mx-2 hidden md:flex md:flex-col'>
                            <p className='text-base text-white font-semibold'>{items.name}</p>
                            <p className='text-sm text-gray-500 font-semibold'>{items.type.toUpperCase()}</p>
                        </div>
                    </Link>
                ))
                : <div className='text-white'>Loading</div>
            }
        </div>
    )
}

export default Library