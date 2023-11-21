import React from 'react'
import CartItem from './CartItem'
import MyCartHeader from './MyCartHeader'
import MyCartFooter from './MyCartFooter'

function MyCart() {
  return (
    <div className='mx-40 bg-[--white-color] p-7'>
        <div className="flex justify-between">
            <h3 className='text-2xl font-medium mb-5'>My Cart</h3>
            <span>02 Items</span>
        </div>
        <MyCartHeader />
        <hr className='border-slate-700'/>
        <CartItem />
        <hr className='border-slate-700'/>
        <CartItem />
        <hr className='border-slate-700'/>
        <CartItem />
        <MyCartFooter />
    </div>
  )
}

export default MyCart