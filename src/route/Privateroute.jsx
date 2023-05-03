import React from 'react';
import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { Authcontex } from '../Authprovider';



const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(Authcontex)
    const location = useLocation();
    console.log(location)
    if(loader){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>
};

export default PrivateRoute;