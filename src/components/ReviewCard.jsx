import { Rate } from 'antd'
import React from 'react'

import { SlOptions  } from "react-icons/sl";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

import Img from '../assets/download.jpeg'

function ReviewCard() {
  return (
    <div className='bg-[--white-color] px-5 py-1'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-3 text-sm'>
                <Rate disabled allowHalf defaultValue={4.6} className='text-sm' />
                <h6>Rahim Rahman</h6>
            </div>
            <div className='flex items-center gap-2 text-sm'>
                <span>1 year ago</span>
                <button><SlOptions  className='text-black'/></button>
            </div>
        </div>
        <p className='text-sm my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quia tenetur a voluptas? Totam alias distinctio laboriosam! Magnam, illum itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, neque!</p>
        <div className='flex gap-3'>
            <a href={Img}><img src={Img} alt="" className='w-16 object-cover h-16 rounded-xl' /></a>
            <a href={Img}><img src={Img} alt="" className='w-16 object-cover h-16 rounded-xl' /></a>
            <a href={Img}><img src={Img} alt="" className='w-16 object-cover h-16 rounded-xl' /></a>
        </div>

        <div className='flex justify-between'>
            <div className='flex gap-3'>
                <div className='flex items-center gap-2'>
                    <span>color:</span>
                    <div className='h-4 w-4 rounded-xl' style={{backgroundColor: '#fcba03'}}></div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>size:</span>
                    <span>XXL</span>
                </div>
            </div>
            {/* like dislike section  */}
            <div className='flex gap-3 mr-10'>
                <div className='flex items-center gap-1 text-slate-400'>
                    <button><BiSolidLike/></button>
                    <span>2</span>
                </div>
                <div className='flex items-center gap-1 text-slate-400'>
                    <button><BiSolidDislike/></button>
                    <span>2</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ReviewCard