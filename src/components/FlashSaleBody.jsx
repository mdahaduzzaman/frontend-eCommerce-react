import { useState } from 'react'
import Img from '../assets/download (1).jpeg'

function FlashSaleBody() {
    const [imgHover, setImageHover] = useState(false)

    const flashSaleProductsList = [
        {   
            id: 1,
            title: "Everyday Low Price",
            url: '#',
            image: Img,
            price: 158,
            discount: 20,
        },
        {   
            id: 2,
            title: "Everyday Low Price",
            url: '#',
            image: Img,
            price: 158,
            discount: 20,
        },
        {   
            id: 3,
            title: "Everyday Low Price",
            url: '#',
            image: Img,
            price: 158,
            discount: 20,
        },
        {   
            id: 4,
            title: "Everyday Low Price",
            url: '#',
            image: Img,
            price: 158,
            discount: 20,
        },
        {   
            id: 5,
            title: "Everyday Low Price",
            url: '#',
            image: Img,
            price: 158,
            discount: 20,
        },
        {   
            id: 6,
            title: "Everyday Low Price",
            url: '#',
            image: Img,
            price: 158,
            discount: 20,
        },
    ]
    return (
        <section className='grid grid-cols-6 gap-3 mx-10 bg-[--white-color]'>
            {
                flashSaleProductsList.map((curElem, index)=>(
                    <a href={curElem.url} key={index} onMouseOver={()=>setImageHover(true)} onMouseOut={()=>setImageHover(false)}>
                        <div className='my-3 w-full pb-3 hover:shadow-xl'>
                            <div className='h-[10rem] overflow-hidden'>
                                <img src={curElem.image} alt={curElem.title} 
                                className={`transition-all w-full h-full object-cover ${imgHover ? 'hover:scale-[1.3]' : 'hover:scale-0'}`} />
                            </div>
                            <h3 className='text-[--dark-color] px-2'>{curElem.title}</h3>
                            <div className='text-[--primary-color] font-medium px-2 text-lg'><span className='text-sm font-extrabold'>৳</span>{curElem.price}</div>
                            <div className="flex items-center text-[.8rem]">
                                <div className='text-slate-400 px-2 line-through'><span className='text-[.7rem] font-extrabold'>৳</span>{curElem.price}</div>
                                <div className='text-[--dark-color]'>{curElem.discount}%</div>
                            </div>
                        </div>
                    </a>
                ))
            }
        </section>
    )
}

export default FlashSaleBody