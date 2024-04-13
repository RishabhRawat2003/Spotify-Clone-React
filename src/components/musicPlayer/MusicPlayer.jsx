import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import apiFunc from '../../apifunctions/Apifunction'
import { FaHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { IoVolumeHigh } from "react-icons/io5";
import { IoMdVolumeOff } from "react-icons/io";

function MusicPlayer() {
    const [data, setData] = useState()
    const [volume, setVolume] = useState(false)
    const music = useSelector((state) => state.musicplayer.songId)

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
        songRange.max = player.duration
        songRange.value = player.currentTime
    }


    function rangeUpdate() {
        let player = document.querySelector('#song')
        let songRange = document.querySelector('#range')
        let pause = document.querySelector('#pause')
        let play = document.querySelector('#play')
        if (player.play()) {
            let a = setInterval(() => {
                songRange.value = player.currentTime
                if (player.duration === player.currentTime) {
                    play.classList.toggle('hidden')
                    pause.classList.toggle('hidden')
                    clearInterval(a)
                }
            }, 50)
        }
    }


    function changeTime() {
        let player = document.querySelector('#song')
        let songRange = document.querySelector('#range')
        let play = document.querySelector('#play')
        if (play.classList.contains('hidden')) {
            player.play()
        } else {
            player.pause()
        }
        player.currentTime = songRange.value
    }

    function stopPlaySong() {
        let pause = document.querySelector('#pause')
        let play = document.querySelector('#play')
        let player = document.querySelector('#song')
        setTimeout(() => {
            if (isAudioPlaying(player)) {
                player.pause()
                play.classList.toggle('hidden')
                pause.classList.toggle('hidden')
            } else {
                player.play()
                play.classList.toggle('hidden')
                pause.classList.toggle('hidden')
                rangeUpdate()
            }
        }, 50);
    }

    useEffect(() => {
        if (music.length > 2) {
            let token = apiFunc.getToken()
            token.then((val) => {
                let trackid = 'https://api.spotify.com/v1/tracks/' + music
                let musicDetails = apiFunc.getTrack(val, trackid)
                musicDetails.then((val) => {
                    setData(val)
                    setTimeout(() => {
                        let play = document.querySelector('#play')
                        let pause = document.querySelector('#pause')
                        play.classList.add('hidden')
                        pause.classList.remove('hidden')
                        playSong()
                        rangeUpdate()
                    }, 50)
                })
            })
        }
    }, [music])

    return (
        <>
            {
                data === undefined
                    ? <div className='text-white'>No songs now !!</div>
                    : <div className='flex w-full justify-between items-center'>
                        <div className='flex h-full w-[70%] items-center ml-2 sm:w-[40%] lg:w-[35%] xl:w-[30%]'>
                            <img src={data.album.images[0].url} alt="image" className='object-cover h-[60%] ' />
                            <div className='h-[60%] w-auto flex ml-2 flex-col'>
                                <p className='text-white text-xs font-semibold overflow-hidden md:overflow-visible'>{data.name}</p>
                                <p className='text-gray-500 text-xs'>{data.album.name}</p>
                            </div>
                        </div>
                        <div className='hidden h-full w-[38%] sm:flex sm:flex-col md:w-[30%] lg:items-center lg:w-[35%] xl:w-[40%]'>
                            <div className='w-full mt-5 h-7 flex justify-around lg:w-[80%]'>
                                <div className='flex items-center'><FaBackward size={25} className='text-white cursor-pointer' /></div>
                                <div className='w-5 flex justify-center items-center' onClick={stopPlaySong} id='playPause'><FaPause id='pause' size={30} className='text-white cursor-pointer' /> <FaPlay id='play' size={25} className='text-white hidden cursor-pointer' /> </div>
                                <div className='flex items-center'><FaForward size={25} className='text-white cursor-pointer' /></div>
                            </div>
                            <input type="range" value="0" onChange={changeTime} onLoadedMetadata={onload} max='30' id='range' className="w-full left-0 bg-gray-300 rounded cursor-pointer mt-4 lg:w-[80%]" />
                        </div>
                        <div className='hidden h-full w-[20%] sm:flex sm:flex-col sm:gap-1 md:w-[25%] lg:w-[25%]'>
                            {
                                volume ? <IoMdVolumeOff size={30} className='text-white cursor-pointer' onClick={() => setVolume(!volume)} /> : <IoVolumeHigh size={30} className='text-white cursor-pointer' onClick={() => setVolume(!volume)} />
                            }
                        </div>
                        <div className='h-full flex w-[25%] px-1 items-center justify-between sm:hidden'>
                            <div className='mx-1'><FaHeart size={25} className='text-white active:text-green-500 cursor-pointer md:hover:text-green-500' /></div>
                            <div className='mr-3' onClick={stopPlaySong} id='playPause'><FaPause id='pause' size={30} className='text-white cursor-pointer' /> <FaPlay id='play' size={25} className='text-white hidden cursor-pointer' /> </div>
                            <audio src={data.preview_url} id='song' className='hidden'></audio>
                            <input type="range" value="0" onChange={changeTime} onLoadedMetadata={onload} max='30' id='range' className="w-auto h-1 absolute hidden left-0 bg-gray-600 rounded cursor-pointer mx-[5%]" />
                        </div>
                    </div>
            }
        </>
    )
}

export default MusicPlayer