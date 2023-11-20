import { useState } from 'react'
import Img from '../assets/MyImg.jpg'
import './categories.css'

function Categories() {
    const categoryList = [
        {
            id: 1,
            title: 'In-Ear Headphones',
            url: '#',
            image: Img
        },
        {
            id: 2,
            title: 'Potatoes',
            url: '#',
            image: Img
        },
        {
            id: 3,
            title: 'Rice',
            url: '#',
            image: Img
        },
        {
            id: 1,
            title: 'In-Ear Headphones',
            url: '#',
            image: Img
        },
        {
            id: 2,
            title: 'Potatoes',
            url: '#',
            image: Img
        },
        {
            id: 3,
            title: 'Rice',
            url: '#',
            image: Img
        },
        {
            id: 1,
            title: 'In-Ear Headphones',
            url: '#',
            image: Img
        },
        {
            id: 2,
            title: 'Potatoes',
            url: '#',
            image: Img
        },
        {
            id: 3,
            title: 'Rice',
            url: '#',
            image: Img
        },
        {
            id: 1,
            title: 'In-Ear Headphones',
            url: '#',
            image: Img
        },
        {
            id: 2,
            title: 'Potatoes',
            url: '#',
            image: Img
        },
        {
            id: 3,
            title: 'Rice',
            url: '#',
            image: Img
        },
        {
            id: 1,
            title: 'In-Ear Headphones',
            url: '#',
            image: Img
        },
        {
            id: 2,
            title: 'Potatoes',
            url: '#',
            image: Img
        },
        {
            id: 3,
            title: 'Rice',
            url: '#',
            image: Img
        },
    ]
    const [imgHover, setImageHover] = useState(false)
    return (
        <section className='mx-10'>
            <h2 className='text-[--dark-color] mt-5 mb-2 text-3xl'>Categories</h2>
            <div className='grid grid-cols-8'>
                {
                    categoryList.map((curElem, index)=>(
                        <a onMouseOver={()=>setImageHover(true)} onMouseOut={()=>setImageHover(false)} href={curElem.url} key={index} className='border border-[--light-color]'>
                            <div id="categoryCard" className='w-full overflow-hidden aspect-square bg-[--white-color]'>
                                <div className='h-[60%] overflow-hidden'>
                                    <img
                                        src={curElem.image}
                                        alt="Description of the image"
                                        className={`transition-all object-cover p-2 ${imgHover ? 'hover:scale-[1.3]' : 'hover:scale-0'}`}
                                    />
                                </div>
                                <p className='text-[--dark-color] text-center px-1 mt-2'>{curElem.title}</p>
                            </div>
                        </a>
                    ))
                }
            </div>
        </section>
    )
}

export default Categories