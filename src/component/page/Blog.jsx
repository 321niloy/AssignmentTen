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
    <p className="py-4">Controlled components have form data handled by the React component, while uncontrolled components have the form data handled by the DOM. Controlled components provide more control and flexibility, but require more code. Uncontrolled components require less code but can be harder to validate and synchronize with the component state.</p>
  </div>
</div>
{/* /////////////////////////////////////////////////////////////////////////////////////////////////////// */}
           </div>
           {/* /////// */}
        </div>
        <div >
            <h1 className='text-center font-bold text-4xl'>How to validate React props using PropTypes???</h1>
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
    <p className="py-4"> To validate React props using PropTypes, you can use the PropTypes library included in React. Import the PropTypes library, set the propTypes property on the component, and use one of the validation functions provided by PropTypes, such as string, number, bool, array, or object.</p>
  </div>
</div>
           </div>
           {/* /////// */}
        </div>
        {/* //////////////////////////////////////////////////////////////////////////////////// */}
    
           {/* /////// */}
    
        <div >
            <h1 className='text-center font-bold text-4xl'>Tell us the difference between nodejs and express js.</h1>
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
    <p className="py-4">Node.js is a runtime environment for running JavaScript code outside of a browser, while Express.js is a web application framework built on top of Node.js. Node.js allows you to build server-side applications, while Express.js provides tools and conventions for building web applications and APIs. </p>
  </div>
</div>
           </div>
           {/* /////// */}
        </div>
        {/* /////////////////////////////////////////// */}
        <div >
            <h1 className='text-center font-bold text-4xl'>What is a custom hook, and why will you create a custom hook?</h1>
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
    <p className="py-4">A custom hook is a reusable function in React that starts with the word use. It allows you to encapsulate stateful logic and share it across different components. You might create a custom hook to reuse complex and repetitive logic, or to abstract away implementation details for a specific feature. </p>
  </div>
</div>
           </div>
           {/* /////// */}
        </div>
        </>
    );
};

export default Blog;