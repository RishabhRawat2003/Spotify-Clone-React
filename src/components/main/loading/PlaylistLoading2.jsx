import React from 'react';

function PlaylistLoading2({ loadingCard  , smallSize}) {
    const cards = [];

    for (let i = 0; i < loadingCard; i++) {
        cards.push(
            <div key={i}
                className={smallSize ? 'flex rounded-md bg-slate-800 h-16 relative w-full' : 'flex relative rounded-md bg-slate-800 h-16 w-80 lg:w-[300px]'}
            >
                <img src='' alt="Image" className='h-full text-slate-800 w-16 object-cover rounded-l-md' />
                <div className='h-full w-full flex flex-col'>
                    <p className='mx-3 font-semibold w-32 h-3 my-1.5 rounded-full bg-gray-500'></p>
                    <p className='text-xs mx-3 w-48 h-3 rounded-full font-semibold bg-gray-500 my-1 sm:w-60'></p>
                    <p className='text-xs mx-3 w-48 h-3 rounded-full font-semibold bg-gray-500 my-1 sm:w-60'></p>
                </div>
            </div>
        );
    }

    return cards;
}

export default PlaylistLoading2;
