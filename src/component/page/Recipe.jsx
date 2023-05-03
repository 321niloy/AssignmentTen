import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './recipecard/RecipeCard';

const Recipe = () => {
    const recipe = useLoaderData()
    return (
        <div className='lg:grid lg:grid-cols-2  justify-center mt-7 mb-7'>
            {
                recipe.map(recipecard => <RecipeCard key={recipecard .id} recipecard={recipecard}></RecipeCard>)
            }
        </div>
    );
};

export default Recipe;