import React from 'react';
import Marquee from "react-fast-marquee";
import upo from '../../../public/image/up1.jpg'
import upt from '../../../public/image/up2.jpg'
import upth from '../../../public/image/up3.png'
import upf from '../../../public/image/upf.webp'
import up5 from '../../../public/image/up5.jpg'

const ReactMarque = () => {
    return (
        <div className='mt-5 mb-5'>
            <h1 className='font-bold text-4xl mb-5'>Upcoming Recipe...................</h1>
             <Marquee>
            {/*  */}
            <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure className='w-96 h-64'><img  src={upo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Roasted Vegetable Medley</h2>
    <p>diced eggplant, red and yellow bell pepper, zucchini, red onion tossed in olive oil, salt and pepper..........................</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div >
            {/*  */}
             {/*  */}
             <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure className='w-96 h-64'><img  src={upt} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Stir-Fried Vegetables</h2>
    <p>sliced bell peppers, broccoli, snow peas, carrots, and onion stir-fried in a hot wok with garlic, soy sauce, and sesame oil.......</p>
    <div className="card-actions justify-end">
    
    </div>
  </div>
</div>
            {/*  */}
             {/*  */}
             <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure className='w-96 h-64'><img  src={upth} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Tomato and Basil Salad</h2>
    <p>chopped tomatoes, fresh basil leaves, and red onion tossed with olive oil, balsamic vinegar, salt, and pepper.............</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
            {/*  */}
             {/*  */}
             <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure className='w-96 h-64'><img  src={upf} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Spicy Roasted CauliflowerButternut Squash Soup!</h2>
    <p>roasted butternut squash, onion, garlic, and vegetable broth blended with coconut milk, ginger, and cinnamon until smooth.........</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
            {/*  */}
             {/*  */}
             <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure className='w-96 h-64'><img  src={up5} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Spicy Roasted Cauliflower</h2>
    <p>cauliflower florets tossed in a mixture of olive oil, smoked paprika, chili powder, and garlic powder, and roasted until crispy.......... </p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>
            {/*  */}
             </Marquee>
            
        </div>
    );
};

export default  ReactMarque;