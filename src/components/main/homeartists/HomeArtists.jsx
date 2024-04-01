import React, { useEffect, useState } from 'react'
import apiFunc from '../../../apifunctions/Apifunction'
import { Link } from 'react-router-dom'

function HomeArtists() {

    const [data, setData] = useState([])

    useEffect(() => {
        let token = apiFunc.getToken()
        token.then((val) => {
            let artists = apiFunc.getArtists(val)
            artists.then((val) => {
                let artistsItems = val.artists
                setData(artistsItems)
            })
        })
    }, [])

    return (
        <div className='w-full h-auto mt-5 px-3 flex flex-wrap justify-center lg:gap-3 xl:justify-around'>
            {
                data && data.length > 1
                    ? data.map((items) => (
                        <Link
                        to={`artiststracks/`+ items.id}
                         className='h-52 w-40 bg-slate-900 mx-1 my-1 flex flex-col hover:opacity-70 duration-200 rounded-md md:w-56 md:h-72 lg:w-60 xl:w-80 xl:h-[330px]' key={items.id}>
                            <img src={items.images[0].url} alt="img" className='w-full h-40 object-cover rounded-t-md md:h-56 xl:h-64'/>
                            <p className='text-sm my-1 font-semibold mx-auto md:text-lg xl:text-2xl'>{items.name}</p>
                            <p className='text-xs text-gray-400 mx-auto md:text-sm xl:text-base'>{items.type.toUpperCase()}</p>
                        </Link>
                    ))
                    : <div className='text-white'>Loading Please Wait!!</div>
            }
        </div>
    )
}

export default HomeArtists