import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivatRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
      return <div className=" mt-20 flex justify-center mx-auto w-[50px]   loading loading-infinity "></div>

    }
    if(user){
        return children;
    }

  return (
    <Navigate state={location.pathname} to='/loginpages' ></Navigate>
  )
}

export default PrivatRoute