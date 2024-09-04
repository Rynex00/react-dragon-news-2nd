import React from 'react'
import Header from '../Shared/Header/Header'
import Navber from '../Shared/Navber/Navber'
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav'
import RightSideNav from '../Shared/RightSideNav/RightSideNav'
import BreackingNews from './BreackingNews/BreackingNews'
import MiddleNav from '../Shared/MiddleNav/MiddleNav'

const Home = () => {
    return (
        <div>
            <Header />
            <BreackingNews />
            <Navber />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                {/* grid 1 -----------------------------------------------------------------------*/}
                <div className=' '>
                    <LeftSideNav />
                </div>
                {/* grid-2 -----------------------------------------------------------------------*/}
                <div className='md:col-span-2 '>
                    <MiddleNav />
                </div>
                {/* grid-3 -----------------------------------------------------------------------*/}
                <div className=' '>
                    <RightSideNav />
                </div>
            </div>
        </div>
    )
}

export default Home