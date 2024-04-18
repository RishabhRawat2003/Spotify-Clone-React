import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import apiFunc from '../../../apifunctions/Apifunction'
import Header from './Header'
import Footer from '../footer/Footer'
import { FaHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { toggleLikedSong } from '../../../store/LikedSlices'
import { songPlayer } from '../../../store/SongSlices'
import SongsLoading from '../loading/SongsLoading'

function SearchPlaylistsTracks() {
    const [data, setData] = useState([])
    const [localStorageAccess, setLocalStorageAccess] = useState([])


    function Liked(id) {
        let target = document.getElementById(id)
        target.classList.toggle('text-green-500')
        dispatch(toggleLikedSong(id))
        if (target.classList.contains('text-green-500')) {
            return null
        } else {
            target.classList.toggle('text-gray-500')
        }
    }

    function loginAlert() {
        alert('Please Login First')
    }

    function playSong(trackId) {
        let windWidth = window.innerWidth
        if (windWidth <= 640) {
            dispatch(songPlayer(trackId))
        }
        else {
            return null
        }
    }

    function playSongOnIcon(trackId) {
        let windWidth = window.innerWidth
        if (windWidth >= 640) {
            dispatch(songPlayer(trackId))
        }
        else {
            return null
        }
    }

    let { tracksid } = useParams()
    const toggle = useSelector((state) => state.sidebar.sidebarStatus)
    const likeToggle = useSelector((state) => state.likeSong)
    const user = useSelector((state) => state.userName.UserName)
    const dispatch = useDispatch()

    useEffect(() => {
        let token = apiFunc.getToken()
        token.then((val) => {
            let trackPoint = 'https://api.spotify.com/v1/playlists/' + tracksid + '/tracks'
            let tracks = apiFunc.getTracks(val, trackPoint)
            tracks.then((val) => {
                setData(val)
            })
        })
        let local = JSON.parse(localStorage.getItem('LikedSongs'))
        setLocalStorageAccess(local)
        if (local && local.length >= 1) {
            local.map((items) => {
                dispatch(toggleLikedSong(items))
            })
        } else {
            localStorage.setItem('LikedSongs', JSON.stringify(likeToggle))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('LikedSongs', JSON.stringify(likeToggle))
    }, [likeToggle])

    if (user.length > 2) {
        return (
            <div className={toggle ? 'playlistTracks bg-[#121212] text-white rounded-md h-[98.7%] w-full flex flex-col mt-2 mr-1 ml-[84px] overflow-y-scroll' : 'playlistTracks bg-[#121212] rounded-md flex flex-col text-white h-[98.7%] w-full mt-2 mx-1 overflow-y-scroll'}>
                <div className='w-full h-auto'>
                    <Header />
                    <div className='w-[95%] mx-auto h-auto my-5 gap-2 flex flex-col'>
                        {
                            data && data.length > 1
                                ? data.map((items) => (
                                    items.track.preview_url
                                        ? <div key={items.track.id} onClick={() => playSong(items.track.id)} className='group h-20 sm:h-16 w-full flex justify-between my-2 z-10 bg-slate-900 active:bg-slate-800 select-none md:hover:bg-slate-800 duration-200 cursor-pointer relative rounded-md lg:h-20'>
                                            <div className='h-full w-full sm:w-[80%] flex gap-3'>
                                                <img src={items.track.album.images[0].url} alt="image" className='object-cover rounded-l-md' />
                                                <div className='flex flex-col w-auto h-full'>
                                                    <p className='text-white font-semibold text-xs my-1 md:text-sm lg:text-base 2xl:text-lg'>{items.track.name}</p>
                                                    <p className='text-gray-500 font-semibold text-xs lg:text-sm'>{items.track.artists.length >= 2 ? items.track.artists[0].name + ' , ' + items.track.artists[1].name : items.track.artists[0].name}</p>
                                                </div>
                                            </div>
                                            <div className='h-full w-16 hidden sm:flex justify-center items-center md:w-24 lg:w-28 lg:justify-around'>
                                                <p className='justify-center items-center z-30 hidden md:flex'><FaHeart size={20} id={items.track.id} onClick={() => Liked(items.track.id)} className={localStorageAccess && localStorageAccess.includes(items.track.id) ? 'text-green-500 cursor-pointer' : 'text-gray-500 cursor-pointer hover:text-green-500'} /></p>
                                                <p onClick={() => playSongOnIcon(items.track.id)} className='h-9 w-9 bg-green-500 rounded-full justify-center items-center flex md:mx-2 md:h-12 md:w-12'><FaPlay size={20} className='text-white' /></p>
                                            </div>
                                        </div> : null
                                ))
                                : <SongsLoading loadingCard='12' />
                        }
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={toggle ? 'playlistTracks bg-[#121212] text-white rounded-md h-[98.7%] w-full flex flex-col mt-2 mr-1 ml-[84px] overflow-y-scroll' : 'playlistTracks bg-[#121212] rounded-md flex flex-col text-white h-[98.7%] w-full mt-2 mx-1 overflow-y-scroll'}>
                <div className='w-full h-auto'>
                    <Header />
                    <div className='w-[95%] mx-auto h-auto my-5 gap-2 flex flex-col'>
                        {
                            data && data.length > 1
                                ? data.map((items) => (
                                    items.track.preview_url
                                        ? <div key={items.track.id} onClick={loginAlert} className='group h-20 sm:h-16 w-full flex justify-between my-2 z-10 bg-slate-900 active:bg-slate-800 select-none md:hover:bg-slate-800 duration-200 cursor-pointer relative rounded-md lg:h-20'>
                                            <div className='h-full w-full sm:w-[80%] flex gap-3'>
                                                <img src={items.track.album.images[0].url} alt="image" className='object-cover rounded-l-md' />
                                                <div className='flex flex-col w-auto h-full'>
                                                    <p className='text-white font-semibold text-xs my-1 md:text-sm lg:text-base 2xl:text-lg'>{items.track.name}</p>
                                                    <p className='text-gray-500 font-semibold text-xs lg:text-sm'>{items.track.artists.length >= 2 ? items.track.artists[0].name + ' , ' + items.track.artists[1].name : items.track.artists[0].name}</p>
                                                </div>
                                            </div>
                                            <div className='h-full w-12 hidden sm:flex justify-center items-center md:w-24 lg:w-28 lg:justify-around'>
                                                <p className='h-9 w-9 bg-green-500 rounded-full justify-center items-center flex md:mx-2 md:h-12 md:w-12'><FaPlay size={20} className='text-white' /></p>
                                            </div>
                                        </div> : null
                                ))
                                : <SongsLoading loadingCard='12' />
                        }
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default SearchPlaylistsTracks