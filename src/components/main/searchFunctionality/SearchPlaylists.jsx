import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import apiFunc from '../../../apifunctions/Apifunction'
import Header from './Header'
import Footer from '../footer/Footer'

function SearchPlaylists() {
    const [data, setData] = useState([])
    const [list, setList] = useState([])

    let { playlistsid } = useParams()
    const toggle = useSelector((state) => state.sidebar.sidebarStatus)


    useEffect(() => {
        let token = apiFunc.getToken()
        token.then((val) => {
            let tracks = apiFunc.getPlaylistByGenre(val, playlistsid)
            tracks.then((val) => {
                let items = val
                let dataArr = val.playlists.items
                setList(dataArr)
                setData(items)
            })
        })
    }, [])
    return (
        <div className={toggle ? 'playlistTracks bg-[#121212] text-white rounded-md h-[98.7%] w-full flex flex-col mt-2 mr-1 ml-[84px] overflow-y-scroll' : 'playlistTracks bg-[#121212] rounded-md flex flex-col text-white h-[98.7%] w-full mt-2 mx-1 overflow-y-scroll'}>
            <div className='w-full h-auto'>
                <Header />
                <div className='w-[95%] mx-auto h-auto my-5 flex flex-col'>
                    <h1 className='text-white text-xl font-semibold mx-3 mb-3 md:text-2xl xl:text-3xl'>Playlists for {data.message} Songs :</h1>
                    <div className='w-full h-auto flex gap-2 flex-wrap justify-center my-4'>
                        {
                            data && list.length >= 1
                                ? list.map((items, x) => (
                                    <Link to={`tracks/` + items.id} key={x} className='h-[300px] w-64 flex flex-col shadow-md shadow-gray-800 active:opacity-70 md:hover:opacity-70 mx-2 my-2 lg:mx-4 lg:my-4'>
                                        <img src={items.images[0].url} alt="image" className='w-[95%] object-cover h-52 mx-auto' />
                                        <p className='text-base font-semibold text-white mx-2'>{items.name}</p>
                                        <p className='text-gray-500 text-xs mx-2 my-1 overflow-hidden'>{items.description}</p>

                                    </Link>
                                ))
                                : <div className='text-white'>Loading Please Wait!!</div>
                        }
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default SearchPlaylists