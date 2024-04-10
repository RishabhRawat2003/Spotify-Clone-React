import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import apiFunc from '../../apifunctions/Apifunction'
import { FaHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";

function MusicPlayer() {
    const [data, setData] = useState()
    const music = useSelector((state) => state.musicplayer.songId)

    function playSong() {
        let player = document.querySelector('#song')
        player.play()
    }

    function isAudioPlaying(audio) {
        return !!(audio.currentTime > 0 && !audio.paused && !audio.ended && audio.readyState > 2);
    }

    // function onload() {
    //     let player = document.querySelector('#song')
    //     let songRange = document.querySelector('#range')
    //     songRange.max = player.duration
    //     songRange.value = player.currentTime
    // }


    function stopPlaySong() {
        let pause = document.querySelector('#pause')
        let play = document.querySelector('#play')
        let player = document.querySelector('#song')
        if (isAudioPlaying(player)) {
            player.pause()
            play.classList.toggle('hidden')
            pause.classList.toggle('hidden')
        } else {
            player.play()
            play.classList.toggle('hidden')
            pause.classList.toggle('hidden')
        }
    }

    useEffect(() => {
        if (music.length > 2) {
            let token = apiFunc.getToken()
            token.then((val) => {
                let trackid = 'https://api.spotify.com/v1/tracks/' + music
                let musicDetails = apiFunc.getTrack(val, trackid)
                musicDetails.then((val) => {
                    setData(val)
                    stopPlaySong()
                    let play = document.querySelector('#play')
                    let pause = document.querySelector('#pause')
                    play.classList.add('hidden')
                    pause.classList.remove('hidden')
                    setTimeout(() => {
                        playSong()
                    }, 100)
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
                        <div className='flex h-full w-[70%] items-center ml-2'>
                            <img src={data.album.images[0].url} alt="image" className='object-cover h-[60%] ' />
                            <div className='h-[60%] w-auto flex ml-2 flex-col'>
                                <p className='text-white text-xs font-semibold'>{data.name}</p>
                                <p className='text-gray-500 text-xs'>{data.album.name}</p>
                            </div>
                        </div>
                        <div className='h-full flex w-[25%] px-1 items-center justify-between sm:hidden'>
                            <div className='mx-1'><FaHeart size={25} className='text-white active:text-green-500 cursor-pointer md:hover:text-green-500' /></div>
                            <div className='mr-3' onClick={stopPlaySong} id='playPause'><FaPause id='pause' size={30} className='text-white cursor-pointer' /> <FaPlay id='play' size={25} className='text-white hidden cursor-pointer' /> </div>
                            <audio src={data.preview_url} id='song' className='hidden'></audio>
                        </div>
                    </div>
            }
        </>
    )
}

export default MusicPlayer