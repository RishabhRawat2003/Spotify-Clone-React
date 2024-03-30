import React, { useEffect, useState } from 'react'
import apiFunc from '../../../apifunctions/Apifunction'
import { Link } from 'react-router-dom'
function SearchBody() {

    const [data, setData] = useState([])

    useEffect(() => {
        let token = apiFunc.getToken()
        token.then((val) => {
            let genres = apiFunc.getGenres(val)
            genres.then((val) => {
                setData(val)
            })
        })
    }, [])

    return (
        <>
            <h1 className='text-2xl font-bold mx-4 md:text-3xl my-4 md:mx-7 xl:text-4xl'>Browse all</h1>
            <div className='mx-4 flex flex-wrap gap-2 justify-evenly my-4 lg:gap-3 lg:my-7'>
                {
                    data && data.length > 1
                        ? data.map((items) => (
                            <Link key={items.id}
                                className='w-36 h-auto gap-1 flex flex-col sm:w-48 lg:w-56 2xl:w-64'
                            >
                                <img src={items.icons[0].url} alt="image" className='object-cover w-full h-40 sm:h-48 lg:h-56 xl:h-60' />
                                <p className='text-sm mx-auto font-semibold my-1 sm:text-base lg:text-lg'>{items.name}</p>
                            </Link>
                        ))
                        : <div>Loading Please Wait!!</div>
                }
            </div>
        </>
    )
}

export default SearchBody