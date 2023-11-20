import Img from '../assets/download.jpeg'
import './featuredCategory.css'

function FeaturedCategory() {
    
    const featuredCategoryList = [
        {   
            id: 1,
            name: "Everyday Low Price",
            url: '#',
            image: Img
        },
        {   
            id: 2,
            name: "Men's Category",
            url: '#',
            image: Img
        },
        {   
            id: 2,
            name: "Men's Category",
            url: '#',
            image: Img
        },
        {   
            id: 2,
            name: "Men's Category",
            url: '#',
            image: Img
        },
        {   
            id: 2,
            name: "Men's Category",
            url: '#',
            image: Img
        },
        {   
            id: 2,
            name: "Men's Category",
            url: '#',
            image: Img
        },
        {   
            id: 1,
            name: "Everyday Low Price",
            url: '#',
            image: Img
        },
        {   
            id: 2,
            name: "Men's Category",
            url: '#',
            image: Img
        },
        {   
            id: 2,
            name: "Men's Category",
            url: '#',
            image: Img
        },
        {   
            id: 2,
            name: "Men's Category",
            url: '#',
            image: Img
        }
    ]
  return (
    <div className='mx-10 flex flex-wrap gap-10 bg-[--white-color] justify-center pt-5 py-16 text-[--dark-color] rounded-lg'>
        {
           featuredCategoryList.map((curElem, index)=>(
                <a href="" key={index}>
                    <div className='text-center w-20 h-20 featuredCategoryItem relative hover:text-[--primary-color]' key={index}>
                        <img src={curElem.image} alt="" className='w-full aspect-square object-cover rounded-xl hover:scale-110 transition-all' />
                        <p>{ curElem.name }</p>
                    </div>
                </a>

           ))
        }
    </div>
  )
}

export default FeaturedCategory