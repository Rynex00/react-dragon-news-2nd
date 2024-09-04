import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import QzonImg1 from '../../../assets/qZone1.png'
import QzonImg2 from '../../../assets/qZone2.png'
import QzonImg3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div className='px-2'>
            <div className='mb-10'>
                <h2 className='text-3xl font-bold mb-5'>LogIn With</h2>
                <button className="btn w-full text-[18px] btn-outline text-blue-500 my-3">
                    <FaGoogle />
                    Google
                </button>
                <button className="btn w-full text-[18px] btn-outline ">
                    <FaGithub />
                    Github
                </button>
            </div>



            <div className='mb-10'>
                <h2 className='text-3xl font-bold mb-5'>Find Us On</h2>
                <a href="https://www.facebook.com/" target='_blank' className=" p-4 border text-lg flex items-center rounded-t-lg ">
                    <FaFacebook className='mr-2' />
                    <span>Facebook
                    </span>
                </a>
                <a href="https://x.com/" target='_blank' className=" p-4 border-x text-lg flex  items-center   ">
                    <FaTwitter className='mr-2' />
                    <span>Twitter</span>
                </a>
                <a href="https://www.instagram.com/" target='_blank' className=" p-4 border rounded-b-lg text-lg flex  items-center   ">
                    <BsTwitterX className='mr-2' />
                    <span>Instagram</span>
                </a>
            </div>

            <div className='mb-10 bg-base-200 p-4 '>
                <h2 className='text-3xl font-bold mb-5'>Q-Zone</h2>
                <img className='w-96 ' src={QzonImg1} alt="" />
                <img className='w-96 ' src={QzonImg2} alt="" />
                <img className='w-96 ' src={QzonImg3} alt="" />
            </div>

        </div>
    )
}

export default RightSideNav