import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({recipecard}) => {
    const {id,name,img,rating,recipe,code}= recipecard 
    const notify = () => toast("Added");
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
  <button onClick={notify} className="btn btn-outline btn-error">Add fovourite</button>
        <ToastContainer />
</div>
        </div>
    );
};

export default RecipeCard;