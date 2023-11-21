import React from 'react'
import './checkOutProgress.css'

function CheckOutProgress() {
  return (
    <div className='max-w-md mx-auto flex justify-around my-7'>
        <div className='activeProgress progress relative aspect-square w-10 text-sm font-medium rounded-full border-2 border-slate-600 p-2 grid place-items-center'>01</div>
        <div className='progress aspect-square relative w-10 text-sm font-medium rounded-full border-2 border-slate-600 p-2 grid place-items-center'>02</div>
        <div className='progress aspect-square relative w-10 text-sm font-medium rounded-full border-2 border-slate-600 p-2 grid place-items-center'>03</div>
    </div>
  )
}

export default CheckOutProgress