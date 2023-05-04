import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Detailsrecipe = () => {
    const {code} = useParams()
    const Allrecipe = useLoaderData()
   
   const [details,setdetails] = useState({})
  
   useEffect(()=>{
  
           
   const ramain = Allrecipe.find(All => All.code == code)
   
    setdetails(ramain)
   },[code, Allrecipe])
    return (
        <div className=' bg-zinc-200'>
          
          <div className="mt-10 mb-10 card lg:card-side bg-base-100 shadow-xl drop-shadow-lg ">
  <figure className='imagesizing h-96 w-80'><img className='' src={details.img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title text-6xl">{details.name}</h2>
    <p>{details.recipe}</p>
    
  </div>
</div>
        </div>
    );
};

export default Detailsrecipe;