import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import images1 from '../../../assets/1.png'
import images2 from '../../../assets/3.png'
import images3 from '../../../assets/2.png'
import moment from 'moment';

const LeftSideNav = () => {

    const [categorys, setCategorys] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])

    return (
        <div>
            <div className='space-y-6'>
                <h2 className="text-2xl font-semibold">All Caterogy</h2>
                {
                    categorys.map(category => <NavLink
                        className='block ml-6 text-xl font-semibold text-gray-400 '
                        to={`/category/${category.id}`}
                    >{category.name}</NavLink>)
                }
            </div>

            {/* card 1---------------------------- */}

            <div>
                <div className="card card-compact px-2 mt-6">
                    <div>
                        <img
                            src={images1} />
                    </div>
                    <div className="">
                        <h2 className="font-semibold my-2 whitespace-normal">Bayern Slams Authorities Over Flight Delay to Club World Cup!</h2>
                        <div className='flex gap-24 text-gray-500'>
                            <p>Sports</p>
                            <h2 className=' '>{moment().format(" D MMM, YYYY")}</h2>
                        </div>
                    </div>
                </div>
            </div>



            {/* card 2---------------------------- */}

            <div>
                <div className="card card-compact px-2 mt-6">
                    <div>
                        <img
                            src={images3} />
                    </div>
                    <div className="">
                        <h2 className="font-semibold my-2 whitespace-normal">Bayern Slams Authorities Over Flight Delay to Club World Cup!</h2>
                        <div className='flex gap-24 text-gray-500'>
                            <p>Sports</p>
                            <h2 className=' '>{moment().format(" D MMM, YYYY")}</h2>
                        </div>
                    </div>
                </div>
            </div>


            {/* card 1---------------------------- */}

            <div>
                <div className="card card-compact px-2 mt-6">
                    <div>
                        <img
                            src={images2} />
                    </div>
                    <div className="">
                        <h2 className="font-semibold my-2 whitespace-normal">Bayern Slams Authorities Over Flight Delay to Club World Cup!</h2>
                        <div className='flex gap-24 text-gray-500'>
                            <p>Sports</p>
                            <h2 className=' '>{moment().format(" D MMM, YYYY")}</h2>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default LeftSideNav