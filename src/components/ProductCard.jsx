import { useState } from 'react'
import Rating from './Rating'

function ProductCard({ item }) {
  const [imgHover, setImageHover] = useState(false)
    return (
      <div className='bg-[--white-color] h-[20rem]'  onMouseOver={()=>setImageHover(true)} onMouseOut={()=>setImageHover(false)}>

        <div className='overflow-hidden w-full h-[60%] '>
          <img src={item.image} alt={item.title} className={`transition-all h-full w-full object-cover ${imgHover ? 'hover:scale-[1.3]' : 'hover:scale-0'}`} />
        </div>

        <h3 className='text-[--dark-color] mx-2'>{item.title}</h3>

        <div className='text-[--primary-color] font-medium px-2 text-lg'>
          <span className='text-sm font-extrabold'>৳</span>
          {item.price}
        </div>

        <div className="flex items-center text-[.8rem]">
            <div className='text-slate-400 px-2 line-through'><span className='text-[.7rem] font-extrabold'>৳</span>{item.price}</div>
            <div className='text-[--dark-color]'>-{item.discount}%</div>
        </div>
        
        <Rating/>
      </div>
    )
}

export default ProductCard