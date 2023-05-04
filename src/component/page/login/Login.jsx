import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGitSquare, FaGoogle} from 'react-icons/fa';
import { Authcontex } from '../../../Authprovider';


const Login = () => {
  const [error,seterror] = useState('')
const {googlesignin,GitLOGin ,SignIn} =useContext(Authcontex)
const navigate = useNavigate()
const location = useLocation()
const from = location.state?.from?.pathname || '/'
const [happen,sethappen]= useState('')

const handleLogin = event =>{
  event.preventDefault()

  const form = event.target
  const email = form.email.value
  const password = form.password.value
 console.log(email,password)
  SignIn(email,password)

  .then(result =>{
    const loggedUser = result.user;
    console.log(loggedUser)
    sethappen('Log in successfull')
    form.reset()
    navigate(from,{replace:true})
  })
  .catch(error =>{
    console.log(error)
    seterror("password or email is wrong",error.massage)
  })
}




const gitsignin =() =>{
  GitLOGin()
  .then(result => {
    const loginuser = result.user;
    console.log(loginuser)
    setuser(loginuser)
    navigate(from,{replace:true})
  })

  .catch(error => {
    console.log(error)
  })


}
  const googlehandler = () =>{
    googlesignin()
    .then((result) => {
      const loguser = result.user;
      console.log(loguser)
      navigate(from,{replace:true})
    })
    .catch((error) => {
      console.log("ERROR",error)
    })
  }
 
    return (
        <div>
            <Form onSubmit={handleLogin} className="hero min-h-screen bg-pink-50">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name="password" placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            
          </label>
          <p>You have no Account<Link to="/register" className='text-primary ms-2'>Register</Link></p>
        </div>
        
            <p className='text-green-500'>{happen}</p>
            <p className='text-red-800'>{error}</p>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
        </div>
       <div className='flex justify-center'>
       <button onClick={gitsignin}  className="btn btn-outline"><FaGitSquare/><span className='ms-2'>Github</span></button>
       <button  onClick={googlehandler}  className="btn btn-outline btn-warning ms-2"><FaGoogle/> <span className='ms-2'>Google</span></button>
       </div>
      </div>
    </div>
  </div>
</Form>
        </div>
    );
};

export default Login;