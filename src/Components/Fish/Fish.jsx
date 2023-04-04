import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FishItem from './FishItem/FishItem';

const Fish = () => {
    const allFish = useLoaderData();
    const fishes = allFish.meals;
    // console.log(fishes)
    return (
        <div>
            <h1 className='text-xl md:text-5xl font-bold bg-yellow-900 text-white
            p-4 text-center'>Feel the seasight with delicious seafood and fish item !!</h1>
            <div className='grid md:grid-cols-3 gap-5 p-2 md:p-16'>
                {
                    fishes.map(fish => <FishItem key={fish.idMeal} fish={fish}></FishItem>)
                }
            </div>
        </div>
    );
};

export default Fish;