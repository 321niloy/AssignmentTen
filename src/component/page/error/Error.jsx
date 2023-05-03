import React from 'react';
import error from '../../../../public/image/error.jpg'

const Error = () => {
    return (
        <div>
            <img className='w-fit h-fit' src={error} alt="" />
        </div>
    );
};

export default Error;