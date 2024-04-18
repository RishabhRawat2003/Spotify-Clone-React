import React from 'react'

function GenrePlaylistLoading({ loadingCard }) {
    const cards = [];

    for (let i = 0; i < loadingCard; i++) {
        cards.push(
            <div key={i} className='h-[300px] relative w-64 flex bg-slate-900 flex-col shadow-md shadow-gray-800 active:opacity-70 md:hover:opacity-70 mx-2 my-2 lg:mx-4 lg:my-4'>
                <img src='' alt="image" className='w-[95%] text-slate-900 object-cover h-52 mx-auto' />
                <p className='text-base font-semibold my-2 h-4 w-24 rounded-full bg-gray-500 mx-2'></p>
                <p className='text-gray-500 text-xs mx-2 my-1 h-4 w-60 rounded-full bg-gray-500 overflow-hidden'></p>
                <p className='text-gray-500 text-xs mx-2 my-1 h-4 w-60 rounded-full bg-gray-500 overflow-hidden'></p>
                <p className='text-gray-500 text-xs mx-2 my-1 h-4 w-60 rounded-full bg-gray-500 overflow-hidden'></p>
                <p className='h-11 w-11 absolute bottom-24 right-3 duration-200 bg-green-500 rounded-full justify-center items-center flex'></p>
            </div>
        );
    }

    return cards;
}

export default GenrePlaylistLoading