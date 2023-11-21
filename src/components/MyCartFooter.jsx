import React from 'react'

function MyCartFooter() {
  return (
    <div className='bg-[--light-color] p-5 rounded-lg'>
        <h3 className='text-2xl mb-5'>Price Details</h3>

        <div className='flex justify-between'>
            <span>Total No. of Items &nbsp; &nbsp; &nbsp;-------------------------------------------------------------------------------------------------</span>
            <span>2</span>
        </div>
        <div className='flex justify-between'>
            <span>Total  MRP Value &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;-------------------------------------------------------------------------------------------------</span>
            <div><span className='font-extrabold text-[.8rem]'>৳</span>199</div>
        </div>
        <div className='flex justify-between'>
            <span>Discount on MRP&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;------------------------------------------------------------------------------------------------</span>
            <div><span className='font-extrabold text-[.8rem]'>৳</span>199</div>
        </div>
        <div className='flex justify-between'>
            <span>Coupon Discount&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;------------------------------------------------------------------------------------------------</span>
            <div><span className='font-extrabold text-[.8rem]'>৳</span>199</div>
        </div>
        <div className='flex justify-between'>
            <span>Delivery Fee&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;------------------------------------------------------------------------------------------------</span>
            <div><span className='font-extrabold text-[.8rem]'>৳</span>199</div>
        </div>
        <hr className='border-slate-700 mt-5 mb-1'/>
        <div className='flex justify-between'>
            <span>Sub Total;&nbsp;&nbsp;;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;------------------------------------------------------------------------------------------------</span>
            <div><span className='font-extrabold text-[.8rem]'>৳</span>199</div>
        </div>
        <div className='flex w-full justify-end gap-5 mt-5 text-[--white-color]'>
            <button className='px-20 py-3 bg-black  rounded-md'>Not Now</button>
            <button className='px-20 py-3 bg-[--primary-color] rounded-md'>Proceed to pay</button>
        </div>
    </div>
  )
}

export default MyCartFooter