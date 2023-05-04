import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './component/Home';
import Login from './component/page/login/Login';
import Register from './component/page/Register';
import Recipe from './component/page/Recipe';
import Error from './component/page/error/Error';

import Authprovider from './Authprovider';
import PrivateRoute from './route/Privateroute';
import Detailsrecipe from './detailsrecipe/Detailsrecipe';
import Blog from './component/page/Blog';
import Order from './component/page/Order';
import Main from './Main/Main';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      ,
      {
        path:"register",
        element:<Register></Register>
      },
      {
        path:'Allrecipe/:id',
        element:<PrivateRoute><Recipe></Recipe></PrivateRoute>,
        loader:({params})=> fetch(`https://assignment-ten-server-321niloy.vercel.app/Allrecipe/${params.id}`)
      },
      {
     path:'detailsrecipe/:code',
     element:<PrivateRoute><Detailsrecipe></Detailsrecipe></PrivateRoute>,
     loader:() => fetch("https://assignment-ten-server-321niloy.vercel.app/Allrecipe")
      },
      {
        path:"blog",
        element:<PrivateRoute><Blog></Blog></PrivateRoute>
      },
      {
        path:"order",
        element:<PrivateRoute><Order></Order></PrivateRoute>
      }
      
    ]
  },
  { 
      path:'*',
      element:<Error></Error>
  
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Authprovider>
     <RouterProvider router={router} />
     </Authprovider>
     
  </React.StrictMode>,
)
