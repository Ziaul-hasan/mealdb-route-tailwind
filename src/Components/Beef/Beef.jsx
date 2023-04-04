import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BeefItem from './BeefItem/BeefItem';

const Beef = () => {
    const allBeefs = useLoaderData();
    const beefs = allBeefs.meals;
    // console.log(beefs)
    return (
        <div>
            <h1 className='text-xl md:text-5xl font-bold bg-yellow-900 text-white
            p-4 text-center'>Enjoy delicious beef items with friends and family !!</h1>
            <div className='grid md:grid-cols-3 gap-5 p-2 md:p-16'>
                {
                    beefs.map(beef => <BeefItem key={beef.idMeal} beef={beef}></BeefItem>)
                }
            </div>
        </div>
    );
};

export default Beef;