import React from 'react'
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';


const BreackingNews = () => {
    return (
        <div className='flex bg-base-200 py-5 px-2 my-8 rounded-md'>
            <button className=" rounded-sm px-8 py-2 bg-purple-600 text-white ">Latest</button>
            <Marquee pauseOnClick={true}>
                <Link className='mr-12' to='/' >I can be a React component, multiple React components, or just some text.</Link>
                <Link className='mr-12' to='/' >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    )
}

export default BreackingNews