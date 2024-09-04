import React from 'react'
import heraderlogo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mt-5'>
            <img className='mx-auto' src={heraderlogo} alt="" />
            <div className='text-gray-500 '>
                <h3 className='my-2'>Journalism Without Fear or Favour</h3>
                <h2 className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</h2>
            </div>
        </div>
    )
}

export default Header