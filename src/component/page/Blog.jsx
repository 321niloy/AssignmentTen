import React from 'react';

const Blog = () => {
    return (
        <>
        <div >
            <h1 className='text-center font-bold text-4xl'>Tell us the differences between uncontrolled and controlled components.</h1>
           {/* ////// */}
           <div className='justify-center'>
             {/* The button to open modal */}
<label htmlFor="my-modal-3" className="btn btn-secondary  mt-3 mb-3 mx-auto flex">click for Answer</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Ans:</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>
           </div>
           {/* /////// */}
        </div>
            
        </>
    );
};

export default Blog;