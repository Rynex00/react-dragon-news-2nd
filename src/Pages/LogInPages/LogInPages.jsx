import React from 'react'
import Navber from '../Shared/Navber/Navber'

const LogInPages = () => {
  return (
    <div className=''>
      <Navber />
      <div className='bg-base-200  py-20 my-10'>
        <h2 className='text-3xl  text-center font-semibold'>Login your account</h2>

        <form className='md:w-3/4 lg:w-1/2 mx-auto my-8'>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-600 text-white">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogInPages