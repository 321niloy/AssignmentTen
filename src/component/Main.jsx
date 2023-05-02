import React from 'react';
import Header from './Header/Header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
             <Header></Header>
             <div className='max-h-full'>
             <Outlet></Outlet>
             </div>
             <Footer></Footer>
        </div>
    );
};

export default Main;