import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from './Food/Food';

const Home = () => {
    const allMeals = useLoaderData();
    const foods = allMeals.meals;
    // console.log(foods)
    return (
        <div>
            <h1 className='text-xl md:text-5xl font-bold bg-yellow-900 text-white
      p-4 text-center'>Enjoy Your Quality Time With Friends and Foods !!</h1>
            <div className='grid md:grid-cols-3 gap-5 p-2 md:p-16'>
                {
                    foods.map(food => <Food key={food.idMeal} food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default Home;