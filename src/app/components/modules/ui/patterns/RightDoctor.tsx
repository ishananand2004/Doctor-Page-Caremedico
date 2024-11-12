"user client";
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { TiStarFullOutline } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import Link from 'next/link';


const RightDoctor = () => {
  return (
    <>
    <div className='container translate-x-[5%]'>
        <div className='container p-10 flex justify-between'>
        <div className='flex gap-4'>
            <img className="rounded-full w-[4vw] h-[4vw]" src="https://plus.unsplash.com/premium_photo-1661443940692-c3b1a66c80ad?q=80&w=2951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div>
                <h1 className='font-semibold text-lg'>Dr.Iqbal chowdhury</h1>
                <h1 className='text-base text-[#9e9e9e]'>cardiology specialist</h1>
                <div className='flex items-center mt-2 translate-x-[-2%] gap-1 cursor-pointer'>
                <IoLocationOutline size={"17px"}/>
                <Link href="/" className='text-base hover:underline'>Estern eveon Coutage area 457 New York</Link>
                </div>
                <div className='flex items-center translate-x-[-2%] gap-1'>
                <AiOutlineMessage size={"17px"}/>
                <Link href="/" className='text-base mt-1 hover:underline'>iqbalchowdhury628@gmail.com</Link>
                </div>
                <div className='flex'>
                <TiStarFullOutline size={"30px"} className='text-yellow-500 mt-2'/>
                <TiStarFullOutline size={"30px"} className='text-yellow-500 mt-2'/>
                <TiStarFullOutline size={"30px"} className='text-yellow-500 mt-2'/>
                <TiStarFullOutline size={"30px"} className='text-yellow-500 mt-2'/>
                <TiStarFullOutline size={"30px"} className='text-yellow-500 mt-2'/>
                </div>
            </div>
        </div>


        <div>
            <h1 className='font-semibold mb-2 text-center'>Social Media</h1>
            <div className='flex gap-2 items-center'>
                <Link href="https://www.facebook.com/"><FaFacebook className='text-blue-500' size={"28px"}/></Link>
                <Link href="https://www.instagram.com/"><FaInstagram className='text-pink-500' size={"28px"}/></Link>
                <Link href="https://x.com/?lang=en"><FaTwitterSquare className='text-blue-500' size={"28px"}/></Link>
                <Link href="https://www.linkedin.com/login"><FaLinkedin className='text-blue-500' size={"28px"}/></Link>
            </div>
        </div>
    </div>


    <div className='container p-10 flex justify-between'>
        <div>
        <h1 className='font-semibold text-xl'>Short Bio</h1>
        <div className='flex items-center gap-2'>
            <button className='w-[10px] h-[10px] bg-red-200 rounded-full' />
            <p>Positive Feedback:"Dr.[Doctor's Name] was excellent at
                  explaining my condition in simple"
            </p>
        </div>
        </div>

        <div className='w-[20vw] border shadow-xl p-5 rounded-md'>
            <h1 className='text-2xl font-semibold text-center'>About the doctor</h1>
            <div className='flex items-center mt-3 translate-x-[3%]'>
            <IoLocationOutline size={"25px"}/>
            <h1 className='text-xl'>10 years of experience</h1>
            </div>
            <h1 className='text-xs text-[#9e9e9e] translate-x-[12%]'>At oral surgery my USA and oral</h1>
            <h1 className='text-xs text-[#9e9e9e] translate-x-[12%]'>surgery clinics New York</h1>

            <div className='flex gap-2 translate-x-[3%] mt-2'>
            <AiOutlineMessage size={"25px"}/>   
            <h1 className='text-xl'>85% Recommend</h1>
            </div>
            <h1 className='text-xs text-[#9e9e9e] translate-x-[12%]'>358 patients world recommend this</h1>
            <h1 className='text-xs text-[#9e9e9e] translate-x-[12%]'>doctor to their friends and family</h1>

            <div className='flex gap-2 translate-x-[3%] mt-2'>
            <IoMdPersonAdd size={"25px"}/>
            <h1 className='text-xl'>Online consultations</h1>
            </div>
            <h1 className='text-xs text-[#9e9e9e] translate-x-[12%]'>The consultantion is passible on</h1>
            <h1 className='text-xs text-[#9e9e9e] translate-x-[12%]'>site and online</h1>

            <button className='mt-4 text-center bg-blue-500 p-4 rounded-md text-[#fff] hover:scale-105 hover:underline hover:bg-blue-700'>Book an appointments now</button>
        </div>

    </div>
    </div>

    
    </>
  )
}

export  {RightDoctor};