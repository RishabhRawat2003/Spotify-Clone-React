import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../main/header/Header'
import apiFunc from '../../apifunctions/Apifunction'
import { MdOutlineAccessTime } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { songPlayer } from '../../store/SongSlices';

function LikedSongs() {

    const [data, setData] = useState([])
    const [storageId, setStorageId] = useState([])

    const toggle = useSelector((state) => state.sidebar.sidebarStatus)
    const user = useSelector((state) => state.userName.UserName)
    const dispatch = useDispatch()

    function playSong(trackId) {
        dispatch(songPlayer(trackId))
    }

    function unLiked(x) {
        let temp = [...storageId]
        temp.splice(x, 1)
        setStorageId(temp)
        localStorage.setItem('LikedSongs', JSON.stringify(temp))
    }

    useEffect(() => {
        let temp = []
        let local = JSON.parse(localStorage.getItem('LikedSongs'))
        if (local && local.length > 0) {
            local.map((items) => {
                if (temp.indexOf(items) === -1) {
                    temp.push(items)
                }
                else {
                    return
                }
            })
        }
        setStorageId(temp)
    }, [])

    useEffect(() => {
        let token = apiFunc.getToken();
        token.then((val) => {
            Promise.all(storageId.map(items => {
                let trackpoint = 'https://api.spotify.com/v1/tracks/' + items;
                return apiFunc.getTrack(val, trackpoint);
            })).then(results => {
                const combinedData = results.reduce((acc, curr) => acc.concat(curr), []);
                setData(combinedData)
            });
        });
    }, [storageId])
    return (
        <div className={toggle ? 'home bg-[#121212] text-white rounded-md h-[98.7%] w-full flex flex-col mt-2 mr-1 ml-[84px] overflow-y-scroll' : 'home bg-[#121212] rounded-md flex flex-col text-white h-[98.7%] w-full mt-2 mx-1 overflow-y-scroll'}>
            <div className='w-full h-auto'>
                <Header />
                <div className='w-full h-44 sm:h-60 bg-[#473488] flex items-end lg:h-80'>
                    <img src="https://misc.scdn.co/liked-songs/liked-songs-64.png" alt="image" className='h-20 sm:h-40 mx-4 my-7 shadow-lg shadow-gray-800 lg:h-60 lg:mx-9' />
                    <div className='h-40 w-auto flex flex-col justify-end my-7 lg:h-60'>
                        <p className='text-white font-bold lg:text-xl xl:text-2xl'>Playlists</p>
                        <p className='text-white text-2xl sm:text-3xl md:text-5xl font-bold lg:text-7xl'>Liked Songs</p>
                        <p className='text-white font-bold lg:text-xl xl:text-2xl'>{user} • {storageId.length} Songs</p>
                    </div>
                </div>
                <div className='ml-2 mt-4 w-full h-auto flex justify-between'>
                    <div className='flex lg:w-[66%] xl:w-[75vw]'>
                        <div className='h-full flex w-[80%] xl:w-[58%] 2xl:w-[57%]'>
                            <p className='mx-2 text-gray-400 lg:text-base font-semibold'>#</p>
                            <p className='mx-3 text-gray-400 lg:text-base font-semibold'>Title</p>
                        </div>
                        <div className='hidden h-full w-auto items-center lg:flex xl:w-[20%]'>
                            <p className='text-gray-400 font-semibold text-sm hidden lg:block lg:text-base'>Album</p>
                        </div>
                        <div className='hidden h-full w-auto items-center justify-center xl:flex'>
                            <p className='text-gray-400 font-semibold text-sm hidden xl:block lg:text-base'>Date Added</p>
                        </div>
                    </div>
                    <div className='h-full flex w-[115px] justify-between mr-1 sm:flex-row-reverse sm:items-center'>
                        <p className='mx-6'><MdOutlineAccessTime size={20} className='text-gray-400' /></p>

                    </div>
                </div>
                <div className='w-[97%] my-2 h-[1px] bg-gray-700 mx-auto'></div>
                <ol className='text-white list-decimal mx-2.5 flex flex-col gap-4'>
                    {
                        data && data.length >= 1
                            ? data.map((items, x) => (
                                <li key={items.id} className='h-14 w-full gap-3 flex justify-between rounded-lg cursor-pointer hover:bg-slate-900'>
                                    <div onClick={() => playSong(items.id)} className='ml-1 flex lg:w-[66%] xl:w-[75vw]'>
                                        <div className='h-full flex w-[80%] xl:w-[58%] 2xl:w-[57%]'>
                                            <p className='flex justify-center items-center mr-3 text-gray-400 lg:text-base'>{x + 1}</p>
                                            <img src={items.album.images[0].url} alt="img" className='object-cover h-[95%] my-auto' />
                                            <div className='flex flex-col'>
                                                <p className='text-white text-xs ml-2 font-semibold sm:text-sm lg:text-base'>{items.name}</p>
                                                <p className='text-gray-500 font-semibold text-xs ml-2 sm:text-sm lg:text-base'>{items.artists.length >= 2 ? items.artists[0].name + ' , ' + items.artists[1].name : items.artists[0].name}</p>
                                            </div>
                                        </div>
                                        <div className='hidden h-full w-auto lg:flex xl:w-[20%]'>
                                            <p className='text-sm text-gray-400 font-semibold'>{items.album.name}</p>
                                        </div>
                                        <div className='hidden h-full w-auto items-center justify-center xl:flex'>
                                            <p className='text-sm text-gray-400 font-semibold lg:text-base'>{items.album.release_date}</p>
                                        </div>
                                    </div>
                                    <div className='h-full flex flex-col w-auto justify-around mr-1 sm:flex-row-reverse sm:items-center'>
                                        <p className='text-gray-400 text-xs sm:flex-1 sm:text-sm lg:text-base'>2:19</p>
                                        <p className='justify-center items-center z-30 sm:mr-10'><FaHeart size={20} onClick={() => unLiked(x)} className='cursor-pointer text-green-500' /></p>
                                    </div>
                                </li>
                            ))
                            : <div className='text-white h-20 mx-auto'>You didn't Liked Any Song Yet !!</div>
                    }
                </ol>
            </div>
        </div>
    )
}

export default LikedSongs