import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FoodDetails = () => {
    const navigate = useNavigate();
    const foods = useLoaderData();
    const food = foods.meals[0];
    const {strMeal, strMealThumb, strCategory, strArea, strTags, strInstructions} = food
    // console.log(food)
    return (
        <div className='p-12 text-center flex flex-col justify-center items-center'>
            <img className='rounded-md' src={strMealThumb} alt="" />
            <h2 className='text-2xl font-bold my-3'>{strMeal}</h2>
            <p className='text-lg font-medium my-3'><strong>Category: </strong>{strCategory}</p>
            <p className='text-lg font-medium my-3'><strong>Origin: </strong>{strArea}</p>
            <p className='text-lg font-medium my-3'><strong>Tags: </strong>{strTags}</p>
            <p className='text-lg font-medium my-3'><strong>Description: </strong>{strInstructions}</p>
            <button onClick={() => navigate(-1)} className='bg-yellow-800 py-4 px-20 text-lg font-medium text-white rounded-md'>Go Back</button>
        </div>
    );
};

export default FoodDetails;