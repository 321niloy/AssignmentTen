import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main';
import Home from './component/Home';
import Login from './component/page/login/Login';
import Register from './component/page/Register';
import Recipe from './component/page/Recipe';
import Error from './component/page/error/Error';

import Authprovider from './Authprovider';
import PrivateRoute from './route/Privateroute';
import Detailsrecipe from './detailsrecipe/Detailsrecipe';
import Blog from './component/page/Blog';


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
        loader:({params})=> fetch(`http://localhost:9000/Allrecipe/${params.id}`)
      },
      {
     path:'detailsrecipe/:code',
     element:<Detailsrecipe></Detailsrecipe>,
     loader:() => fetch("http://localhost:9000/Allrecipe")
      },
      {
        path:"blog",
        element:<Blog></Blog>
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
