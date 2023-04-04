import React from 'react';
import { useNavigate } from 'react-router-dom';

const BeefItem = ({beef}) => {
    const navigate = useNavigate();
    const { strMealThumb, strMeal, strCategory, strArea, strTags, idMeal } = beef;
    return (
        <div className='shadow-lg shadow-gray-400 rounded-md flex flex-col'>
            <div className='p-4 '>
                <img className='w-full h-64 md:h-96 rounded-md' src={strMealThumb} alt="" />
                <h2 className='text-2xl font-bold my-3'>{strMeal}</h2>
                <p className='text-lg font-medium my-3'><strong>Category: </strong>{strCategory}</p>
                <p className='text-lg font-medium my-3'><strong>Origin: </strong>{strArea}</p>
                <p className='text-lg font-medium my-3'><strong>Tags: </strong>{strTags}</p>
            </div>
            <button onClick={() => navigate(`/foodDetails/${idMeal}`)} className='bg-yellow-800 p-4 text-lg font-medium text-white w-full bottom-0 mt-auto rounded-t-none rounded-md'>Show details</button>
        </div>
    );
};

export default BeefItem;