import { useState } from 'react';
import img1 from '../assets/Nogod.jpeg';
import img2 from '../assets/google.png';
import img3 from '../assets/download.jpeg';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Carousel } from 'antd';

function MainCarousoul() {
    const [imgIndex, setImageIndex] = useState(0);

    const carosusolImg = [
        {
            image: img1,
            url: '#'
        }, 
        {
            image: img2,
            url: '#'
        }, 
        {
            image: img3,
            url: '#'
        }, 
    ]
    return (
        <div className='relative h-full w-[75%]'>
            <Carousel autoplay className='h-full transition-all'>
                {
                carosusolImg.map((_, index) => (
                    <div className='h-full w-full' key={index}>
                        <a href={carosusolImg[index].url}>
                            <img
                            src={carosusolImg[index].image}
                            alt=""
                            className='h-[25rem] w-full rounded-lg object-fill bg-yellow-400'
                            />
                        </a>
                    </div>
                ))
                }
            </Carousel>
             <div className='text-black'>
                <button className='bg-[#4c454573] py-10 px-1 absolute left-0 text-4xl top-[50%] translate-y-[-50%]'
                 onClick={()=>{setImageIndex(imgIndex === 0 ? carosusolImg.length-1: imgIndex-1)}}
                >
                    <IoIosArrowBack />
                </button>
                <button className='bg-[#4c454573] py-10 px-1 absolute right-0 text-4xl top-[50%] translate-y-[-50%]'
                 onClick={()=>{setImageIndex(imgIndex === carosusolImg.length-1 ? 0: imgIndex+1)}}
                >
                    <IoIosArrowForward />
                </button>
            </div> 
        </div>
    )
}

export default MainCarousoul