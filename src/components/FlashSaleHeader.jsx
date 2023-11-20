import React from 'react'
import FlashSaleTime from './FlashSaleTime'

function FlashSale() {
  return (
    <div className='text-black mx-10 mt-5'>
        <h3 className='text-[--dark-color] text-3xl mb-2'>Flash Sale</h3>
        <div className="flex justify-between bg-[--white-color] px-5 py-5">
          <div className='flex gap-10'>
            <p className='text-[--primary-color]'>On Sale Now</p>
            <div>Ending In</div>
            <FlashSaleTime/>
          </div>
          <div>
            <a href="" className='border-2 border-[--primary-color] py-2 px-3 hover:bg-[--primary-color] hover:text-[--white-color]'>SHOP MORE</a>
          </div>
        </div>
        <hr className='border-1 border-slate-300'/>
    </div>
  )
}

export default FlashSale