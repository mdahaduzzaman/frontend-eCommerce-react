import React from 'react'

function MyCartHeader() {
  return (
    <div className='grid grid-cols-4 font-bold text-center mb-10'>
        <div>PRODUCT</div>
        <div>PRICE</div>
        <div>QUANTITY</div>
        <div>TOTAL</div>
    </div>
  )
}

export default MyCartHeader