import { useState } from 'react';
import img1 from '../assets/download (1).jpeg';
import img2 from '../assets/download (2).jpeg';
import img3 from '../assets/download.jpeg';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
        <div className='relative w-[55rem]'>
            <div className='overflow-hidden h-full mt-3 ms-4 transition-all'>
                {
                    carosusolImg.map((_, index)=>(
                        <a href={carosusolImg[imgIndex].url} key={index}>
                            <img src={carosusolImg[imgIndex].image} alt="" className='w-full h-full rounded-xl object-cover' />
                        </a>
                    ))
                }
                
            </div>
            <div className='text-black'>
                <IoIosArrowBack onClick={()=>{setImageIndex(imgIndex === 0 ? carosusolImg.length-1: imgIndex-1)}} className='absolute left-3 text-4xl top-[50%] translate-y-[-50%] cursor-pointer'/>
                <IoIosArrowForward onClick={()=>{setImageIndex(imgIndex === carosusolImg.length-1 ? 0: imgIndex+1)}} className='absolute right-[-.3rem] text-4xl top-[50%] translate-y-[-50%] cursor-pointer' />
            </div>
            <div className='absolute flex gap-3 bottom-[.3%] left-[50%] translate-x-[-50%]'>
                {
                    carosusolImg.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full border-2 border-white ${index === imgIndex ? 'bg-white' : 'bg-transparent'}`}
                        ></div>
                      ))
                      
                }
            </div>
        </div>
    )
}

export default MainCarousoul