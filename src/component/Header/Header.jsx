import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../public/image/avatar.jpg'

const Header = () => {
    return (
        <div>
            <h1 className='text-center text-6xl drop-shadow-2xl text-yellow-800'>GramBanglar Recipe</h1>
            <h2 className='text-center text-4xl text-yellow-950 mt-3'>Location: Dhaka,Bangladesh</h2>
            <div>
            <div className="navbar bg-orange-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link>Home</Link></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><Link>Blog</Link></li>
      </ul>
    </div>
   <Link className="btn btn-ghost normal-case text-xl">GramBangla</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link>Home</Link></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-orange-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><Link>Blog</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
 {/* ////////////////////////////////// */}
  <div className="avatar online">
  <div className="w-20 me-2 rounded-full">
    <img src={avatar} />
  </div>
</div>
{/* //////////////////////// */}
  <Link className="btn btn-outline btn-warning">Login</Link>
    <Link className="btn btn-outline btn-success ms-2">Register</Link>
  </div>
</div>
            </div>
        </div>
    );
};

export default Header;