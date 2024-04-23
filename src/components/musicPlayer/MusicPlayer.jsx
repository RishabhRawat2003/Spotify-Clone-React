import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import apiFunc from '../../apifunctions/Apifunction'
import { FaHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { IoVolumeHigh } from "react-icons/io5";
import { IoMdVolumeOff } from "react-icons/io";
import { toggleLikedSong } from '../../store/LikedSlices';
import { TbDeviceMobileUp } from "react-icons/tb";

function MusicPlayer() {
    const [data, setData] = useState()
    const [localStorageAccess, setLocalStorageAccess] = useState([])
    const [volume, setVolume] = useState(false)
    const [playPause, setPlayPause] = useState(false)
    const [likeState, setLikeState] = useState(false)
    const music = useSelector((state) => state.musicplayer.songId)
    const likeToggle = useSelector((state) => state.likeSong)
    const dispatch = useDispatch()


    function playSong() {
        let player = document.querySelector('#song')
        player.play()
    }

    function isAudioPlaying(audio) {
        return !!(audio.currentTime > 0 && !audio.paused && !audio.ended && audio.readyState > 2);
    }

    function onload() {
        let player = document.querySelector('#song')
        let songRange = document.querySelector('#range')
        let songRange2 = document.querySelector('#range2')
        songRange.max = player.duration
        songRange.value = player.currentTime
        songRange2.max = player.duration
        songRange2.value = player.currentTime
    }

    function rangeUpdate() {
        let player = document.querySelector('#song')
        let songRange = document.querySelector('#range')
        let songRange2 = document.querySelector('#range2')
        let width = window.innerWidth
        if (width <= 639) {
            if (player.play()) {
                let a = setInterval(() => {
                    songRange2.value = player.currentTime
                    if (player.duration === player.currentTime) {
                        setPlayPause(true)
                        clearInterval(a)
                    }
                }, 50)
            }
        } else {
            if (player.play()) {
                let a = setInterval(() => {
                    songRange.value = player.currentTime
                    songRange2.value = player.currentTime
                    if (player.duration === player.currentTime) {
                        setPlayPause(true)
                        clearInterval(a)
                    }
                }, 50)
            }
        }
    }

    function muteHandle() {
        setVolume(!volume)
        let player = document.querySelector('#song')
        let volumeRange = document.querySelector('#volume')
        let volumeRange2 = document.querySelector('#volumeRange')
        let width = window.innerWidth
        if (width <= 639) {
            if (!volume) {
                player.volume = 0
                volumeRange2.value = 0
            } else {
                player.volume = 0.5
                volumeRange2.value = 0.5
            }
        } else {
            if (!volume) {
                player.volume = 0
                volumeRange.value = 0
            } else {
                player.volume = 0.5
                volumeRange.value = 0.5
            }
        }
    }

    function volumeClickHandle(e) {
        let value = e.target.value
        let player = document.querySelector('#song')
        player.volume = value
        if (value < 0.1) {
            setVolume(true)
        } else {
            setVolume(false)
        }
    }

    function volumeChangeHandle() {
        let volumeRange = document.querySelector('#volume')
        let volumeRange2 = document.querySelector('#volumeRange')
        let player = document.querySelector('#song')
        let width = window.innerWidth
        if (width <= 639) {
            player.volume = volumeRange2.value
            if (volumeRange2.value < 0.1) {
                setVolume(true)
            } else {
                setVolume(false)
            }
        } else {
            player.volume = volumeRange.value
            if (volumeRange.value < 0.1) {
                setVolume(true)
            } else {
                setVolume(false)
            }
        }
    }

    function changeTime() {
        let player = document.querySelector('#song')
        let songRange = document.querySelector('#range')
        let songRange2 = document.querySelector('#range2')
        player.currentTime = songRange.value
        let width = window.innerWidth
        if (width <= 639) {
            player.currentTime = songRange2.value
        } else {
            if (!playPause) {
                player.play()
            } else {
                player.pause()
            }
        }
    }

    function stopPlaySong() {
        let player = document.querySelector('#song')
        setTimeout(() => {
            if (isAudioPlaying(player)) {
                player.pause()
                setPlayPause(true)
            } else {
                player.play()
                setPlayPause(false)
                rangeUpdate()
            }
        }, 50);
    }

    function Liked(id) {
        let target = document.getElementById(id + 's')
        dispatch(toggleLikedSong(id))
        if (target.classList.contains('text-green-500')) {
            setLikeState(false)

        } else if (target.classList.contains('text-gray-500')) {
            setLikeState(true)
        }
    }

    function musicPlayerBig() {
        let width = window.innerWidth
        if (width <= 639) {
            let musicPlayerDiv = document.querySelector('#musicPlayerDiv')
            let musicPlayerDivBig = document.querySelector('#musicPlayerDivBig')
            musicPlayerDiv.classList.toggle('hidden')
            musicPlayerDivBig.classList.toggle('hidden')
            musicPlayerDivBig.classList.toggle('flex')
            musicPlayerDivBig.classList.toggle('flex-col')
        }
    }

    function closeMusicPlayerBig() {
        let width = window.innerWidth
        if (width <= 639) {
            let musicPlayerDiv = document.querySelector('#musicPlayerDiv')
            let musicPlayerDivBig = document.querySelector('#musicPlayerDivBig')
            musicPlayerDiv.classList.toggle('hidden')
            musicPlayerDivBig.classList.toggle('hidden')
            musicPlayerDivBig.classList.toggle('flex')
            musicPlayerDivBig.classList.toggle('flex-col')
        }
    }

    useEffect(() => {
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

    useEffect(() => {
        if (music.length > 2) {
            let token = apiFunc.getToken()
            token.then((val) => {
                let trackid = 'https://api.spotify.com/v1/tracks/' + music
                let musicDetails = apiFunc.getTrack(val, trackid)
                musicDetails.then((val) => {
                    setData(val)
                    setTimeout(() => {
                        setPlayPause(false)
                        playSong()
                        rangeUpdate()
                    }, 50)
                })
            })
            let local = JSON.parse(localStorage.getItem('LikedSongs'))
            let index = local.indexOf(music)
            if (index >= 0) {
                setLikeState(true)
            } else {
                setLikeState(false)
            }
        }
    }, [music])

    return (
        <>
            {
                data === undefined
                    ? <div className='w-full h-full flex justify-center items-center'>
                        <div className='w-60 h-auto flex flex-col items-center sm:w-80 md:w-96 lg:w-[50%]'>
                            <div className='w-full mt-5 h-7 flex justify-around lg:w-[80%]'>
                                <div className='flex items-center'><FaBackward disabled size={25} className='text-gray-600 cursor-pointer' /></div>
                                <div><FaPlay disabled size={25} className='text-gray-600 cursor-pointer' /></div>
                                <div className='flex items-center'><FaForward disabled size={25} className='text-gray-600 cursor-pointer' /></div>
                            </div>
                            <input type="range" disabled value="0" className="w-full rounded cursor-pointer mt-4 lg:w-[80%]" />
                        </div>
                    </div>
                    : <>
                        <div id='musicPlayerDiv' className='flex w-full relative z-10 justify-between items-center'>
                            <div className='flex h-full w-[70%] items-center ml-2 sm:w-[40%] lg:w-[35%] xl:w-[30%]'>
                                <img src={data.album.images[0].url} alt="image" className='object-cover h-[60%] ' />
                                <div className='h-[60%] w-auto flex ml-2 flex-col'>
                                    <p className='text-white text-xs font-semibold overflow-hidden md:overflow-visible xl:text-base'>{data.name}</p>
                                    <p className='text-gray-500 text-xs'>{data.album.name}</p>
                                </div>
                            </div>
                            <div className='hidden h-full w-[38%] sm:flex sm:flex-col md:w-[30%] lg:items-center lg:w-[35%] xl:w-[40%]'>
                                <div className='w-full mt-5 h-7 flex justify-around lg:w-[80%]'>
                                    <div className='flex items-center'><FaBackward size={25} className='text-white cursor-pointer' /></div>
                                    <div className='mr-3' onClick={stopPlaySong} id='playPause'>{playPause ? <FaPlay size={25} className='text-white cursor-pointer' /> : <FaPause size={30} className='text-white cursor-pointer' />}</div>
                                    <div className='flex items-center'><FaForward size={25} className='text-white cursor-pointer' /></div>
                                </div>
                                <input type="range" value="0" onChange={changeTime} onLoadedMetadata={onload} max='30' id='range' className="w-full left-0 bg-gray-300 rounded cursor-pointer mt-4 lg:w-[80%]" />
                            </div>
                            <div className='hidden h-full w-[20%] sm:flex sm:items-center sm:gap-1 md:w-[25%] lg:w-[25%] lg:justify-end'>
                                {
                                    volume ? <IoMdVolumeOff onClick={muteHandle} size={30} className='text-white cursor-pointer mx-2' /> : <IoVolumeHigh onClick={muteHandle} size={30} className='text-white cursor-pointer mx-2' />
                                }
                                <input type="range" onClick={volumeClickHandle} onChange={volumeChangeHandle} id='volume' min={0} max={1} step={0.1} className='cursor-pointer w-[90%] mr-2 lg:w-[60%] xl:w-[40%]' />
                            </div>
                            <div className='h-full flex w-[25%] px-1 items-center justify-between sm:hidden'>
                                <div className='mx-1'><TbDeviceMobileUp size={25} onClick={musicPlayerBig} className='text-white cursor-pointer active:text-green-500' /></div>
                                <div className='mr-3' onClick={stopPlaySong} id='playPause'>{playPause ? <FaPlay size={25} className='text-white cursor-pointer' /> : <FaPause size={30} className='text-white cursor-pointer' />}</div>
                                <audio src={data.preview_url} id='song' className='hidden'></audio>
                                <input type="range" value="0" onChange={changeTime} onLoadedMetadata={onload} max='30' id='range' className="w-auto h-1 absolute hidden left-0 bg-gray-600 rounded cursor-pointer mx-[5%]" />
                            </div>
                        </div>
                        <div id='musicPlayerDivBig' className='hidden w-full border-[1px] rounded-t-xl bg-[#121212] border-white absolute duration-200 animate-[comingup_0.2s_ease-in-out] z-30 bottom-[-10px] h-[85%]'>
                            <p onClick={closeMusicPlayerBig} className='text-base text-white font-bold my-5 flex justify-end mx-4 cursor-pointer'>Close</p>
                            <img src={data.album.images[0].url} alt="image" className='object-cover h-[50%] w-[80%] mx-auto' />
                            <div className='h-auto w-full flex flex-col px-10 mt-4'>
                                <p className='text-white text-lg font-bold overflow-hidden'>{data.name}</p>
                                <p className='text-gray-500 text-sm'>{data.album.name}</p>
                            </div>
                            <div className='h-auto w-full flex flex-col justify-center'>
                                <div className='w-full mt-5 h-7 flex justify-around'>
                                    <div className='flex items-center'><FaBackward size={25} className='text-white cursor-pointer' /></div>
                                    <div className='h-10 w-6 flex justify-center' onClick={stopPlaySong} id='playPause'>{playPause ? <FaPlay size={25} className='text-white cursor-pointer' /> : <FaPause size={30} className='text-white cursor-pointer' />}</div>
                                    <div className='flex items-center'><FaForward size={25} className='text-white cursor-pointer' /></div>
                                </div>
                                <input type="range" value="0" onChange={changeTime} onLoadedMetadata={onload} max='30' id='range2' className="w-[90%] mx-auto bg-gray-300 rounded cursor-pointer mt-5" />
                            </div>
                            <div className='w-full flex justify-between h-auto mt-3'>
                                {
                                    likeState ? <div className='mx-6'><FaHeart size={25} id={data.id + 's'} onClick={() => Liked(data.id)} className='text-green-500 cursor-pointer' /></div> : <div className='mx-6'><FaHeart size={25} id={data.id + 's'} onClick={() => Liked(data.id)} className='text-gray-500 cursor-pointer active:text-green-500' /></div>
                                }
                                {/* <div className='mx-6'><FaHeart size={25} id={data.id + 's'} onClick={() => Liked(data.id)} className={likeState ? 'text-green-500 cursor-pointer' : 'text-gray-500 cursor-pointer active:text-green-500'} /></div> */}
                                <div className='h-full w-[50%] flex mx-5 items-center gap-1 '>
                                    {
                                        volume ? <IoMdVolumeOff onClick={muteHandle} size={30} className='text-white cursor-pointer mx-2' /> : <IoVolumeHigh onClick={muteHandle} size={30} className='text-white cursor-pointer mx-2' />
                                    }
                                    <input type="range" onClick={volumeClickHandle} onChange={volumeChangeHandle} id='volumeRange' min={0} max={1} step={0.1} className='cursor-pointer w-[90%] mr-2' />
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default MusicPlayer