import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Breadcrumb, Rate, Slider, Pagination } from 'antd'

import COD from '../assets/cod.png'
import verification from '../assets/verification.png'
import authentication from '../assets/authentication.png'
import bestPrice from '../assets/best-price.jpeg'
import free_delivery from '../assets/free_delivery.jpeg'
import market from '../assets/market.png'
import Img from '../assets/download.jpeg'


import ProductCard from '../components/ProductCard.jsx'

function Products() {
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };

  const ProductList = [
    {
        id: 1,
        image: Img,
        title: "Artificial Leather Wallet for Men",
        price: 290,
        discount: 56,
        ratings: 4
    },
    {
        id: 1,
        image: Img,
        title: "Artificial Leather Wallet for Men",
        price: 290,
        discount: 56,
        ratings: 4
    },
    {
        id: 1,
        image: Img,
        title: "Artificial Leather Wallet for Men",
        price: 290,
        discount: 56,
        ratings: 4
    },
    {
        id: 1,
        image: Img,
        title: "Artificial Leather Wallet for Men",
        price: 290,
        discount: 56,
        ratings: 4
    },
    {
        id: 1,
        image: Img,
        title: "Artificial Leather Wallet for Men",
        price: 290,
        discount: 56,
        ratings: 4
    },
    {
        id: 1,
        image: Img,
        title: "Artificial Leather Wallet for Men",
        price: 290,
        discount: 56,
        ratings: 4
    },
    {
        id: 1,
        image: Img,
        title: "Artificial Leather Wallet for Men",
        price: 290,
        discount: 56,
        ratings: 4
    },
    {
        id: 1,
        image: Img,
        title: "Artificial Leather Wallet for Men",
        price: 290,
        discount: 56,
        ratings: 4
    },
    {
        id: 1,
        image: Img,
        title: "Artificial Leather Wallet for Men",
        price: 290,
        discount: 56,
        ratings: 4
    },
    {
        id: 1,
        image: Img,
        title: "Artificial Leather Wallet for Men",
        price: 290,
        discount: 56,
        ratings: 4
    },
    {
        id: 1,
        image: Img,
        title: "Artificial Leather Wallet for Men",
        price: 290,
        discount: 56,
        ratings: 4
    },
  ]
  return (
    <>
      <Breadcrumb className='my-4 mx-10'
        separator=">"
        items={[
          {
            title: 'Home',
            href: '/'
          },
          {
            title: "Women's and Girl's",
            href: '',
          },
          {
            title: 'Tradional Wear',
            href: '',
          },
          {
            title: 'product.title',
          },
        ]}
      />
      <div className='mx-10 flex gap-3'>
        {/* Filter section */}
        <div className='w-[25%] bg-[--white-color] p-2'>
          <h3 className='text-2xl font-medium'>Filters</h3>
          <h6 className='text-xl mt-2'>Promotion & Services</h6>
          <hr className='my-2' />
          <div className='flex flex-col gap-3'>
            <button className='border px-5 py-1 rounded-md text-start flex items-center gap-2'><img src={free_delivery} alt="Free delivery" className='h-5'/>Free Delivery</button>
            <button className='border px-5 py-1 rounded-md text-start flex items-center gap-2'><img src={bestPrice} alt="Best Price" className='h-5'/>Best Price Guaranteed</button>
            <button className='border px-5 py-1 rounded-md text-start flex items-center gap-2'><img src={authentication} alt="authentication" className='h-5'/>Authentic Brands</button>
            <button className='border px-5 py-1 rounded-md text-start flex items-center gap-2'><img src={verification} alt="Verified" className='h-5'/>Verified</button>
            <button className='border px-5 py-1 rounded-md text-start flex items-center gap-2'><img src={COD} alt="Cash on delivery" className='h-5'/>Cash on Delivery</button>
            <button className='border px-5 py-1 rounded-md text-start flex items-center gap-2'> <img src={market} alt="Cash on delivery" className='h-5'/>eComm Mart</button>
          </div>

          <h6 className='text-xl mt-5'>Price</h6>
          <hr className='my-2' />
          <div className=''>
            <Slider
              min={1}
              max={500000}
              defaultValue={30000}
              // tooltip={{
              //   open: true,
              // }}
            />
          </div>

          <h6 className='text-xl mt-5'>Colors</h6>
          <hr className='my-2' />
          <div className='flex gap-3'>
            <button className='w-8 h-8 rounded-xl' style={{backgroundColor: '#52c41a'}}></button>
            <button className='w-8 h-8 rounded-xl' style={{backgroundColor: '#1677ff'}}></button>
            <button className='w-8 h-8 rounded-xl' style={{backgroundColor: '#722ed1'}}></button>
            <button className='w-8 h-8 rounded-xl' style={{backgroundColor: '#ffc53d'}}></button>
          </div>

          <h6 className='text-xl mt-5'>Ratings</h6>
          <hr className='my-2' />
          <div className='flex flex-col ps-2 gap-2'>
            <Rate allowHalf disabled defaultValue={5} className='text-2xl' />
            <div className='flex items-center gap-5'>
              <Rate allowHalf disabled defaultValue={4} className='text-2xl' />
              <span>and up</span>
            </div>
            <div className='flex items-center gap-5'>
              <Rate allowHalf disabled defaultValue={3} className='text-2xl' />
              <span>and up</span>
            </div>
            <div className='flex items-center gap-5'>
              <Rate allowHalf disabled defaultValue={2} className='text-2xl' />
              <span>and up</span>
            </div>
            <div className='flex items-center gap-5'>
              <Rate allowHalf disabled defaultValue={1} className='text-2xl' />
              <span>and up</span>
            </div>
          </div>
        </div>
        {/* Product listings */}
        <div className='w-[75%] grid grid-cols-5 gap-3'>
            {
              ProductList.map((curElem, index)=>(
                  <Link to={`/products/${curElem.id}`} key={index} className='hover:shadow-lg'>
                      <ProductCard item={curElem}/>
                  </Link>
              ))
            }
            {
              ProductList.map((curElem, index)=>(
                  <Link to={`/products/${curElem.id}`} key={index} className='hover:shadow-lg'>
                      <ProductCard item={curElem}/>
                  </Link>
              ))
            }
        </div>

      </div>
      <div className='flex justify-end px-10'>
        <Pagination current={current} onChange={onChange} total={100} />
      </div>
    </>
  )
}

export default Products