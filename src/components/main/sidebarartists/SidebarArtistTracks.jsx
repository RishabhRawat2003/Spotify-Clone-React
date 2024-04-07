import React, { useState, useEffect } from 'react'
import Header from '../header/Header'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import apiFunc from '../../../apifunctions/Apifunction'
import Footer from '../footer/Footer'
import { FaHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { toggleLikedSong } from '../../../store/LikedSlices'


function SidebarArtistTracks() {
    const [data, setData] = useState([])

    let { trackid } = useParams()
    const toggle = useSelector((state) => state.sidebar.sidebarStatus)
    const likeToggle = useSelector((state) => state.likeSong)
    const dispatch = useDispatch()

    function Liked(id) {
        let target = document.getElementById(id)
        target.classList.toggle('text-green-500')
        dispatch(toggleLikedSong(id))

    }

    useEffect(() => {
        let token = apiFunc.getToken()
        token.then((val) => {
            let trackPoint = trackid
            console.log(trackPoint);
            let track = apiFunc.getArtistsTracks(val, trackPoint)
            track.then((val) => {
                let trackList = val.tracks
                setData(trackList)
            })
        })
        let local = JSON.parse(localStorage.getItem('likedsongssidebarartiststracks'))
        if (local && local.length >= 1) {
            local.map((items) => {
                dispatch(toggleLikedSong(items))
            })
        } else {
            localStorage.setItem('likedsongssidebarartiststracks', JSON.stringify(likeToggle))
        }
    }, [trackid])

    useEffect(() => {
        localStorage.setItem('likedsongssidebarartiststracks', JSON.stringify(likeToggle))
    }, [likeToggle])

    return (
        <div className={toggle ? 'sidebarArtists bg-[#121212] text-white rounded-md h-[98.7%] w-full flex flex-col mt-2 mr-1 ml-[84px] overflow-y-scroll' : 'sidebarArtists bg-[#121212] rounded-md flex flex-col text-white h-[98.7%] w-full mt-2 mx-1 overflow-y-scroll'}>
            <div className='w-full h-auto'>
                <Header />
                <div className='w-[95%] mx-auto h-auto my-5 flex flex-col'>
                    {
                        data && data.length > 1
                            ? data.map((items) => (
                                items.preview_url ?
                                    <div key={items.id} className='group h-20 sm:h-16 w-full flex justify-between my-2 bg-slate-900 active:bg-slate-800 md:hover:bg-slate-800 duration-200 select-none cursor-pointer relative rounded-md lg:h-20'>
                                        <div className='h-full w-full sm:w-[70%] flex gap-3'>
                                            <img src={items.album.images[0].url} alt="image" className='object-cover rounded-l-md' />
                                            <div className='flex flex-col w-auto h-full'>
                                                <p className='text-white font-semibold text-xs my-1 md:text-sm lg:text-base 2xl:text-lg'>{items.name.slice(0,58)}</p>
                                                <p className='text-gray-500 font-semibold text-xs lg:text-sm'>{items.artists.length >= 2 ? items.artists[0].name + ' , ' + items.artists[1].name : items.artists[0].name}</p>
                                            </div>
                                        </div>
                                        <div className='h-full w-16 hidden sm:flex justify-center items-center md:w-24 lg:w-28 lg:justify-around'>
                                            <p className='justify-center items-center z-30 hidden md:flex'><FaHeart size={20} id={items.id} onClick={() => Liked(items.id)} className='text-gray-500 cursor-pointer hover:text-green-500' /></p>
                                            <p className='h-9 w-9 bg-green-500 rounded-full justify-center items-center flex md:mx-2 md:h-12 md:w-12'><FaPlay size={20} className='text-white' /></p>
                                        </div>
                                    </div> : null
                            ))
                            : <div className='text-white'>Loading Please Wait!!</div>
                    }
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default SidebarArtistTracks