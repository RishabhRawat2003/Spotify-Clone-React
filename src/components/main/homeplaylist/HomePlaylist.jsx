import React, { useEffect, useState } from 'react'
import apiFunc from '../../../apifunctions/Apifunction'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaPlay } from "react-icons/fa";
import PlaylistLoading from '../loading/PlaylistLoading';
import PlaylistLoading2 from '../loading/PlaylistLoading2';

function HomePlaylist() {
    const [data, setData] = useState([])
    const [dataNotUser, setDataNotUser] = useState([])
    const [small, setSmall] = useState(false)
    const [hoverPlayIcon, setHoverPlayIcon] = useState('')
    const [noOfCards, setNoOfCards] = useState('')
    const user = useSelector((state) => state.userName.UserName)

    function playHoverIcon(id) {
        setHoverPlayIcon(id)
    }

    useEffect(() => {
        let smallSize = document.firstElementChild.clientWidth
        if (smallSize < 932) {
            setNoOfCards(4)
        }
        else {
            setNoOfCards(8)
        }
        const getToken = apiFunc.getToken()
        getToken.then((val) => {
            let playlists = apiFunc.getPlaylists(val)
            playlists.then((val) => {
                let small = document.firstElementChild.clientWidth
                setDataNotUser(val.playlists.items.slice(0, 20))
                if (small < 932) {
                    setNoOfCards(4)
                    let list = val.playlists.items.slice(0, 4)
                    setData(list)
                    setSmall(true)
                }
                else {
                    setNoOfCards(8)
                    let list = val.playlists.items.slice(0, 8)
                    setData(list)
                    setSmall(false)
                }
            })
        })
    }, [])

    if (user.length > 2) {
        return (
            <div className={small ? 'my-3 mx-3 flex flex-wrap h-auto gap-1 justify-center' : 'mt-7 mx-3 flex flex-wrap h-auto gap-1 justify-center lg:gap-3'}>
                {
                    data && data.length > 1
                        ? data.map((items) => (
                            <Link
                                to={`playliststracks/` + items.id}
                                key={items.name}
                                id={items.href}
                                onMouseEnter={() => playHoverIcon(items.href)}
                                onMouseLeave={() => setHoverPlayIcon('')}
                                className={small ? 'flex rounded-md bg-slate-800 h-16 relative w-full hover:bg-slate-700 duration-200' : 'flex relative rounded-md bg-slate-800 h-16 w-80 hover:bg-slate-700 duration-200 lg:w-[300px]'}
                            >
                                <img src={items.images[0].url} alt="Image" className='h-full w-16 object-cover rounded-l-md' />
                                <div className='h-full w-full flex flex-col'>
                                    <p className='mx-3 font-semibold'>{items.name}</p>
                                    <p className='text-xs mx-3 font-semibold text-gray-500 my-1 overflow-hidden'>{items.description}</p>
                                </div>
                                {
                                    items.href === hoverPlayIcon ? <p className='h-11 w-11 absolute bottom-2 left-3 duration-200 bg-green-500 rounded-full justify-center items-center flex'><FaPlay size={20} className='text-white' /></p> : null
                                }
                            </Link>
                        ))
                        : <PlaylistLoading2 loadingCard={noOfCards} smallSize={small} />
                }
            </div>
        )
    }
    else {
        return (
            <div className={small ? 'my-3 mx-3 flex flex-wrap h-auto gap-1 justify-center' : 'mt-7 mx-3 flex flex-wrap h-auto gap-1 justify-center lg:gap-3'}>
                {
                    dataNotUser && dataNotUser.length > 1
                        ? dataNotUser.map((items) => (
                            <Link
                                to={`playliststracks/` + items.id}
                                key={items.id}
                                id={items.href}
                                onMouseEnter={() => playHoverIcon(items.href)}
                                onMouseLeave={() => setHoverPlayIcon('')}
                                className={'flex my-2 mx-2 flex-col rounded-md bg-slate-800 relative h-80 w-60 active:opacity-70 md:hover:opacity-70 shadow-md shadow-gray-700 duration-200 lg:w-64'}
                            >
                                <img src={items.images[0].url} alt="Image" className='h-56 object-cover rounded-l-md' />
                                <div className='h-full w-full flex flex-col mx-1'>
                                    <p className='font-semibold'>{items.name}</p>
                                    <p className='text-xs font-semibold text-gray-500 my-1 overflow-hidden'>{items.description}</p>
                                </div>
                                {
                                    items.href === hoverPlayIcon ? <p className='h-11 w-11 absolute bottom-28 right-3 duration-200 bg-green-500 rounded-full justify-center items-center flex'><FaPlay size={20} className='text-white' /></p> : null
                                }
                            </Link>
                        ))
                        : <PlaylistLoading loadingCard='12' />
                }
            </div>
        )
    }

}

export default HomePlaylist