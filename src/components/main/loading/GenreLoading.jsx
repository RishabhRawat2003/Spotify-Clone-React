import React from 'react';

function GenreLoading({ loadingCard }) {
    const cards = [];

    for (let i = 0; i < loadingCard; i++) {
        cards.push(
            <div key={i}
                className='w-48 h-auto gap-1 bg-slate-900 flex flex-col sm:w-48 lg:w-56 2xl:w-64'
            >
                <img src='' alt="image" className='object-cover text-slate-900 w-full h-48 sm:h-48 lg:h-56 xl:h-60' />
                <p className='text-sm mx-auto bg-gray-500 h-4 w-32 rounded-full font-semibold my-2 sm:text-base lg:text-lg'></p>
            </div>
        );
    }

    return cards;
}

export default GenreLoading;
