import React from 'react';

function ArtistsLoading({ loadingCard }) {
    const cards = [];

    for (let i = 0; i < loadingCard; i++) {
        cards.push(
            <div key={i}
                className='h-auto w-48 bg-slate-900 mx-1 my-1 flex flex-col active:opacity-70 md:hover:opacity-70 duration-200 rounded-md md:w-56 lg:w-60 xl:w-80'>
                <img src='' alt="img" className='w-full text-slate-900 h-48 object-cover rounded-t-md md:h-56 xl:h-64' />
                <p className='text-sm my-1 mt-3 w-40 h-5 bg-gray-500 rounded-full font-semibold mx-auto md:text-lg xl:text-2xl'></p>
                <p className='text-xs text-gray-400 mb-3 bg-gray-500 w-20 h-5 rounded-full mx-auto md:text-sm xl:text-base'></p>
            </div>
        );
    }

    return cards;
}

export default ArtistsLoading;
