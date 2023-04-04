import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChickenItem from './ChickenItem/ChickenItem';

const Chicken = () => {
    const allChickens = useLoaderData();
    const chickens = allChickens.meals;
    return (
        <div>
            <h1 className='text-xl md:text-5xl font-bold bg-yellow-900 text-white
            p-4 text-center'>Test different types of chicken items !!</h1>
            <div className='grid md:grid-cols-3 gap-5 p-2 md:p-16'>
                {
                    chickens.map(chicken => <ChickenItem key={chicken.idMeal} chicken={chicken}></ChickenItem>)
                }
            </div>
        </div>
    );
};

export default Chicken;