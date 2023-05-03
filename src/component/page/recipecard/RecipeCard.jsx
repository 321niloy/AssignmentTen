import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({recipecard}) => {
    const {id,name,img,rating,recipe,code}= recipecard 
    return (
        <div className='flex justify-center mb-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="h-80 w-full"src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{rating}</div>
    </h2>
    <p ><span className='font-bold italic'>Recipe: </span>{recipe.slice(0,50)} ........<Link to={`/detailsrecipe/${code}`}><div className="badge badge-secondary badge-outline">Seemore</div></Link></p>
  </div>
</div>
        </div>
    );
};

export default RecipeCard;