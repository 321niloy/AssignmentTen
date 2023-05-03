import React, { useEffect, useState } from 'react';

import Sliders from './page/Sliders';
import Cardslider from '../../src/component/page/cardslider/Cardslider';


const Home = () => {
    const [carddata,setCarddata] = useState([]);
    useEffect(() =>{
    fetch('http://localhost:9000/card')
    .then(response => response.json())
    .then(data =>setCarddata(data) )
    } ,[])
    return (
        <div>
             <Sliders></Sliders>
             <div>
                <h1 className='text-4xl text-yellow-800 text-center mt-3 mb-5 italic hover:not-italic font-bold'>Hare is Ours Cheifs details and Theirs Best Recipes</h1>
             </div>
            <div className='lg:grid lg:grid-cols-3'>
            {
                carddata.map(card => <Cardslider key={carddata.id} card={card}></Cardslider>)
             }
            </div>
            
        </div>
    );
};

export default Home;