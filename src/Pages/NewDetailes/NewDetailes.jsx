import React from 'react'
import Header from '../Shared/Header/Header'
import RightSideNav from '../Shared/RightSideNav/RightSideNav'
import { useParams } from 'react-router-dom'
import Navber from '../Shared/Navber/Navber'

const NewDetailes = () => {

    const {id} = useParams()

    return (
        <div>
            <Header />
            <Navber/>
            <div className='grid md:grid-cols-4 mt-10'>
                <div className='col-span-3'>
                <h2 className='text-3xl font-semibold'>Dragon News</h2>
                <p>{id}</p>
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    )
}

export default NewDetailes