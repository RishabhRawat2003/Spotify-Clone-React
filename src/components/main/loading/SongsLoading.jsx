import React from 'react'

function SongsLoading({ loadingCard }) {
    const cards = [];

    for (let i = 0; i < loadingCard; i++) {
        cards.push(
            <div key={i} className='group h-20 sm:h-16 w-full flex justify-between my-2 bg-slate-900 cursor-pointer relative rounded-md lg:h-20'>
                  <div className='h-full w-full sm:w-[70%] flex gap-3'>
                    <img src='' alt="image" className='object-cover text-slate-900 rounded-l-md' />
                    <div className='flex flex-col w-auto h-full'>
                      <p className='text-white font-semibold h-4 w-32 rounded-full bg-gray-500 text-xs my-2 sm:w-60 md:text-sm lg:text-base 2xl:text-lg'></p>
                      <p className='text-gray-500 font-semibold h-4 w-48 rounded-full bg-gray-500 text-xs sm:w-96 lg:text-sm'></p>
                      <p className='text-gray-500 font-semibold h-4 my-2 w-48 rounded-full bg-gray-500 text-xs sm:w-96 lg:text-sm'></p>
                    </div>
                  </div>
                  <div className='h-full w-16 hidden sm:flex justify-center items-center md:w-24 lg:w-28 lg:justify-around'>
                    <p className='h-9 w-9 bg-green-500 rounded-full justify-center items-center flex md:mx-2 md:h-12 md:w-12'></p>
                  </div>
                </div>
        );
    }

    return cards;
}

export default SongsLoading
