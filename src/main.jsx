import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main';
import Home from './component/Home';
import Cardslider from './component/page/cardslider/Cardslider';
import Login from './component/page/login/Login';
import Register from './component/page/Register';
import Recipe from './component/page/Recipe';
import Error from './component/page/error/Error';
import Detailsrecipe from './component/page/Detailsrecipe';

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
        element:<Recipe></Recipe>,
        loader:({params})=> fetch(`http://localhost:9000/Allrecipe/${params.id}`)
      },
      {
     path:'detailsrecipe/:code',
     element:<Detailsrecipe></Detailsrecipe>,
     loader:() => fetch("http://localhost:9000/Allrecipe")
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
     <RouterProvider router={router} />
   
  </React.StrictMode>,
)
