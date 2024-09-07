import React, { useContext } from 'react'
import Navber from '../Shared/Navber/Navber'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const LogInPages = () => {

  const {signIn} = useContext(AuthContext)
  const location = useLocation();
  console.log('lcation in the log pages ' , location);
  const navigate = useNavigate()

  const handleLogIn  = e =>{
    e.preventDefault();

    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')

    console.log(email,password);

    signIn(email,password)
    .then(result => {
      console.log(result);
      navigate(location?.state ? location.state : '/')
      
    })
    .catch(error => {
      console.log(error);
    })

  }

  return (
    <div className=''>
      <Navber />
      <div className='bg-base-200  py-20 my-10'>
        <h2 className='text-3xl  text-center font-semibold'>Login your account</h2>

        <form onSubmit={handleLogIn} className='md:w-3/4 lg:w-1/2 mx-auto my-8'>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name='email' className="input input-bordered"  />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name='password' className="input input-bordered"  />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-600 text-white">Login</button>
          </div>
        </form>
        <p className='text-center'>Don't have an account Plaese <Link className='font-bold text-blue-500' to='/register' >Register</Link></p>
      </div>
    </div>
  )
}

export default LogInPages