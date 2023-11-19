import React from 'react'
import FlashSaleTime from './FlashSaleTime'

function FlashSale() {
  return (
    <div className='text-black mx-10'>
        <h3>Flash Sale</h3>
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
        <hr className='border-1 border-[--dark-color]'/>
    </div>
  )
}

export default FlashSale