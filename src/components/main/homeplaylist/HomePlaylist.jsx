import React, { useEffect, useState } from 'react'
import apiFunc from '../../../apifunctions/Apifunction'
import { Link } from 'react-router-dom'

function HomePlaylist() {
    const [data, setData] = useState([])
    const [small, setSmall] = useState(false)

    useEffect(() => {
        const getToken = apiFunc.getToken()
        getToken.then((val) => {
            let playlists = apiFunc.getPlaylists(val)
            playlists.then((val) => {
                let small = document.firstElementChild.clientWidth
                if (small < 932) {
                    let list = val.playlists.items.slice(0, 4)
                    setData(list)
                    setSmall(true)
                }
                else {
                    let list = val.playlists.items.slice(0, 8)
                    setData(list)
                    setSmall(false)
                }
            })
        })
    })

    return (
        <div className={small ? 'my-3 mx-3 flex flex-wrap h-auto gap-1 justify-center' : 'mt-7 mx-3 flex flex-wrap h-auto gap-1 justify-start lg:gap-3'}>
            {
                data && data.length > 1
                    ? data.map((items) => (
                        <Link key={items.id}
                            id={items.href}
                            className={small ? 'flex rounded-md bg-slate-800 h-16 w-full hover:bg-slate-700 duration-200' : 'flex rounded-md bg-slate-800 h-16 w-80 hover:bg-slate-700 duration-200 lg:w-[300px]'}
                        >
                            <img src={items.images[0].url} alt="Image" className='h-full w-16 object-cover rounded-l-md' />
                            <div className='h-full w-full flex flex-col'>
                                <p className='mx-3 font-semibold'>{items.name}</p>
                                <p className='text-xs mx-3 font-semibold text-gray-500 my-1 overflow-hidden'>{items.description}</p>
                            </div>
                        </Link>
                    ))
                    : <div>Loading Please Wait!!</div>
            }
        </div>
    )
}

export default HomePlaylist