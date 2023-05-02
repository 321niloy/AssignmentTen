import React from 'react';
import {Rating} from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
const Cardslider = ({card}) => {
    const {img,id} = card
   
    return (
     <>
     <div className="card w-96 bg-base-100 shadow-xl mt-4 mb-4 ">
     <figure><img className="h-72 w-full" src={img} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">{card.name}</h2>
    <p>Experience: {card.experience}</p>
    <p>Recipe Quantity: {card.number}</p>
    <div className='flex'>
    <p>Raiting: {card.rating}</p>
    <Rating style={{maxWidth:130}} value={card.rating} readOnly>

    </Rating>
    </div>
    <div  className="card-actions justify-end">
    
    <Link className="btn btn-primary" to={`/Allrecipe/${id}`}> Recipe</Link>
    </div>
  </div>
</div>
    </>
    );
};

export default Cardslider;