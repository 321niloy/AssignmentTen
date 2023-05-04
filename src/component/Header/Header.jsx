import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import avatar from '../../../public/image/avatar.jpg'
import  { Authcontex } from '../../Authprovider';




const Header = () => {
    const {user,logout} =useContext(Authcontex)

    const handleLogout = () =>{
        logout()
        .then()
        .catch(error => console.log(error))
      }

      const NavLinkstyle = ({isActive}) =>{

        return{
          fontWeight: isActive? "bold" :"normal",
          backgroundColor: isActive?"#F9B5A5" :"#F7E1DB",
        }
      }


    return (
        <div>
            <h1 className='text-center text-6xl drop-shadow-2xl text-yellow-800 font-serif'>GramBanglar Recipe</h1>
            <h2 className='text-center text-4xl text-yellow-950 mt-3'>Location: Dhaka,Bangladesh</h2>
           
            <div>
<div className="navbar bg-orange-100">
<div className="navbar-start">
<div className="dropdown">
<label tabIndex={0} className="btn btn-ghost lg:hidden">
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
</label>
<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
<li><NavLink style={NavLinkstyle} to="/">Home</NavLink></li>
<li><NavLink style={NavLinkstyle} to="/order">Order Now</NavLink></li>
{
  user && <li><NavLink style={NavLinkstyle} to="/blog">Blog</NavLink></li>
}
</ul>
</div>
<Link to="/" className="font-bold lg:text-xl ms-0 ps-0">Recipe</Link>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal px-1">
 <li><NavLink className="me-2" style={NavLinkstyle} to="/">Home</NavLink></li>

 <li><NavLink className="me-2" style={NavLinkstyle} to="/order">Order Now</NavLink></li>

{
  user && <li><NavLink style={NavLinkstyle} to="/blog">Blog</NavLink></li>
}
</ul>
</div>
<div className="navbar-end">
{/* ////////////////////////////////// */}
{
    user && <div className="avatar online">
    <div className="w-12 lg:w-18 me-2 rounded-full">
    <img src={avatar} />
    </div>
    </div> 

}
{/* //////////////////////// */}
{
    user? <button onClick={handleLogout} className="btn btn-outline btn-error">Logout</button> : 
    <>
<Link  to="login" className="btn btn-outline btn-warning">Login</Link>
<Link to="register" className="btn btn-outline btn-success ms-2 ">Register</Link>
</>
}
  </div>
</div>
            </div>
        </div>
    );
};

export default Header;
<div>
<Link  to="login" className="btn btn-outline btn-warning">Login</Link>
<Link to="register" className="btn btn-outline btn-success lg:ms-2 ">Register</Link>
</div>