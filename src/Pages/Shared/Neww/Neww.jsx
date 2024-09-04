import React from 'react'
import moment from 'moment';
import { CiBookmark, CiShare1, CiShare2 } from "react-icons/ci";



const Neww = ({ neww }) => {

    console.log(neww)


    return (
        <div className=' mb-12 border'>

            <div className='flex  bg-base-200 justify-between items-center p-4 mb-8'>
                <div className='flex  gap-4'>
                    <div className="avatar ">
                        <div className="ring-primary ring-offset-base-100 w-14  rounded-full ring ring-offset-2">
                            <img src={neww.thumbnail_url} />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-lg font-bold'>{neww.author.name}</h2>
                        <h2 className=''>{moment().format("YYYY-d-M")}</h2>
                    </div>
                </div>
                <div className='flex text-2xl justify-end'>
                    <CiBookmark />
                    <CiShare2 />
                </div>
            </div>

            <div className="card card-compact  w-full ">
                <h2 className="card-title text-gray-600 mb-2 p-2">{neww.title}</h2>
                <div className='p-5'>
                    <img
                        src={neww.image_url}
                        alt="Shoes" />
                </div>
                <div className="card-body">
                    <p>{neww.details}</p>
                    <a className='font-semibold text-orange-500 text-lg' href="#"> Read More...</a>
                </div>
                <div className='w-[500px] ml-5 bg-slate-300 h-[0.8px]'></div>
                <div className='p-4 flex justify-between'>
                    <p>Rating : {neww.rating.number}</p>
                    <p>view : {neww.total_view} </p>
                </div>
            </div>
        </div>
    )
}

export default Neww