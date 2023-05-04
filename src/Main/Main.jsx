import React from 'react';
import Footer from '../component/footer/Footer';
import "./Main.css"


import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';

const Main = () => {
    return (
        <div>
           <Header></Header>
             <div className='gapfor'>
             <Outlet></Outlet>
             </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;