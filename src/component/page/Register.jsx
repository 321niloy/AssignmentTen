import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { Authcontex } from '../../Authprovider';

const Register = () => {
  const {createuser} = useContext(Authcontex)

  const handleRegister = event =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    const name =form.name.value
    const Photourl = form.photo.value
    console.log(email,password,name,Photourl)

    createuser (email,password)
    .then(result => {
      const Createuser = result.user;
      console.log(Createuser)
      form.reset()
    })
    .catch(error =>{
      console.log(error)
    })
  }

    return (
        <div>
                 <Form onSubmit={handleRegister}  className="hero min-h-screen bg-pink-50">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name'  placeholder="Name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <input type="text" name='photo'  placeholder="Name" className="input input-bordered" required/>
        </div>
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
          <input type="text" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a><br />
            
          </label>
          <p>You have an Account<Link to="/login" className='text-primary ms-2'>Login</Link></p>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
  </div>
</Form>
        </div>
    );
};

export default Register;