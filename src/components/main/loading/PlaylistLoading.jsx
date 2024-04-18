import React from 'react';

function PlaylistLoading({ loadingCard }) {
    const cards = [];

    for (let i = 0; i < loadingCard; i++) {
        cards.push(
            <div key={i}
                className={'flex my-2 mx-2 flex-col rounded-md bg-slate-800 relative h-80 w-60 active:opacity-70 md:hover:opacity-70 shadow-md shadow-gray-700 duration-200 lg:w-64'}
            >
                <img src='' alt="image" className='min-h-56 object-cover text-slate-800 rounded-l-md' />
                <div className='h-full w-full flex flex-col mx-1'>
                    <p className='font-semibold h-6 w-32 bg-gray-500 mb-2 rounded-full'></p>
                    <p className='text-xs font-semibold bg-gray-500 h-6 w-60 my-1 rounded-full'></p>
                    <p className='text-xs font-semibold bg-gray-500 h-6 w-60 my-1 rounded-full'></p>
                </div>
                <p className='h-11 w-11 absolute bottom-28 right-3 duration-200 bg-green-500 rounded-full justify-center items-center flex'></p>
            </div>
        );
    }

    return cards;
}

export default PlaylistLoading;
