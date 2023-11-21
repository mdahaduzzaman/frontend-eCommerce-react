import React from 'react'
import Img from '../assets/google.png'

function CartItem() {
    const Item = {
        id: '01',
        title: "Lorem ipsum dollar set to be true",
        quantity: 3,
        price: 150,
        color: '#a8324a',
        size: 'XL',
        image: Img
    }

    return (
        <div className='text-center grid grid-cols-4 items-center my-5'>
            <div>
                <img src={Item.image} alt={Item.title} className='w-20 aspect-square object-cover mx-auto' />
                <h5 className=' mx-5 mt-5'>{Item.title}</h5>
                <div className='flex justify-between mx-auto items-center w-40 mt-3'>
                    <div className='flex'>
                        <div className='mr-2 font-medium'>size:</div> 
                        <div>{Item.size}</div>
                    </div>
                    <div className='flex'>
                        <div className='mr-2 font-medium'>color:</div>
                        <div className='w-6 h-6 rounded-full' style={{ backgroundColor: Item.color }}></div>
                    </div>
                </div>
            </div>
            <div className=''>
                <span className='font-extrabold text-[.8rem]'>৳</span>
                <span>{ Item.price }</span>
            </div>
            <div className='flex items-center ms-16'>
                <button className='h-5 aspect-square border border-slate-700 block pb-[1.7rem]'>-</button>
                <button className='h-5 aspect-square border border-slate-700 block pb-[1.7rem]'>{Item.quantity}</button>
                <button className='h-5 aspect-square border border-slate-700 block pb-[1.7rem]'>+</button>
            </div>
            <div className=' mr-10'>
            <span className='font-extrabold text-[.8rem]'>৳</span>
                <span>{ Item.price * Item.quantity}</span>
            </div>
        </div>
    )
}

export default CartItem