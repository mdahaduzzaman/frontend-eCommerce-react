import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Img from '../assets/download.jpeg'
import Img2 from '../assets/bkash.png'


import { IoCart } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { IoMdCamera } from "react-icons/io";
import { FaStar } from "react-icons/fa";

import { Breadcrumb, Rate } from 'antd';
import { Tooltip } from 'antd';

import ProductCard from '../components/ProductCard';
import ReviewCard from '../components/ReviewCard';


function SingleProduct() {
  const [mainImageIndex, setMainImageIndex] = useState(0)
  const [cartHover, setCartHover] = useState(false)
  const [heartHover, setHeartHover] = useState(false)
  const { product_id } = useParams(); // Corrected to product_id
  
  const handleCartHover = () => {
    setCartHover(!cartHover);
  };

  const handleHeartHover = () => {
    setHeartHover(!heartHover);
  };


  const item = {
    id: 4,
    image: Img,
    title: "Artificial Leather Wallet for Men",
    price: 290,
    discount: 56,
    ratings: 4
  }

  const product = {
    id: product_id,
    image: [Img, Img2, Img, Img, Img],
    title: "Artificial Leather Wallet for Men",
    price: 290,
    discount: 56,
    ratings: 4,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quaerat officia omnis ipsum odio quidem ea distinctio atque maiores architecto.',
    colors: [
      '#4287f5',
      '#428756'
    ],
    size: [
      'S',
      'M',
      'L',
      'XL',
      'xXL',
      'XXXL'
    ]
  }

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
            title: product.title,
          },
        ]}
      />
      <div>

      </div>
      <section className='flex mx-10 h-[30rem] bg-[--white-color]'>
        <div className='w-[60%] h-[30rem] mt-5 mx-5'>
          <img src={product.image[mainImageIndex]} alt={product.title} className='object-cover h-[70%] w-full' />
          <div className='flex gap-5 my-5 justify-center'>
            {
              product.image.map((curElem, index)=>(
                <img src={curElem} onClick={()=>setMainImageIndex(index)} key={index} alt={`${product.title}-image-${index}`} className={`cursor-pointer max-h-[4rem] object-cover ${mainImageIndex === index?'opacity-70':''}`} />
              ))
            }
          </div>
        </div>

        <div className='w-[40%]'>
          <h2 className='mt-10 text-3xl font-medium'>{ product.title }</h2>
          <div className='flex items-center my-2'>
            <Rate allowHalf disabled defaultValue={2.5} className='mr-3' />
            <span className='font-medium'>{2.5}</span>
          </div>
          <p>{product.description}</p>

          <h6 className='font-medium mt-3 mb-1'>Select Color</h6>
          <div className="grid grid-cols-2 mb-5">
            <div className='flex gap-2'>
              {
                product.colors.map((curElem, index)=>(
                  <button key={index} className="w-8 h-8 rounded-full border-[2px] border-[--primary-color] hover:opacity-80" style={{ backgroundColor: curElem }}></button>
                ))
              }
            </div>

            {/* Action button */}
            <div className='flex gap-4'>
              <button className='bg-[--primary-color] text-[--white-color] p-3 rounded-full transform hover:rotate-[360deg] transition-all' onMouseEnter={handleCartHover} onMouseLeave={handleCartHover} title="Add to Cart">
                {
                  cartHover? <IoCart className='text-lg' /> : <IoCartOutline className='text-lg'/>
                }
                </button>
              <button className='bg-[--primary-color] text-[--white-color] p-3 rounded-full transform hover:rotate-[360deg] transition-all' onMouseEnter={handleHeartHover} onMouseLeave={handleHeartHover} title="Add to Wishlist">
                {
                  heartHover?  <FaHeart/>  : <FaRegHeart/>
                }
              </button>
            </div>
          </div>

          {/* Select Size */}
          <div>
            <h6 className='font-medium mb-1'>Select Size</h6>
            <div className='flex flex-wrap gap-3'>
              {
                product.size.map((curElem, index)=>(
                  <button key={index} className='bg-[--light-color] px-5 hover:bg-[--primary-color] hover:text-[--white-color] rounded-md'>{curElem}</button>
                ))
              }
            </div>
          </div>
          {/* Price */}
          <div className='text-4xl my-5'>
            <span className='text-[1.7rem] font-extrabold mr-2'>৳</span>
            <span className='font-bold'>{product.price}</span>
          </div>
          
        </div>
      </section>

      <section className='flex mx-10'>
        {/* Section for reviews, ratings, shop details and relavant products */}
        <div className='w-[86%]'>
          <div className='flex'>
            {/* first 50% for show rating section */}
            <div className='w-[50%]'>
              <h3 className='my-3'>Ratings & Reviews</h3>

              <div className='p-6 flex gap-10 bg-[--white-color] border border-slate-300'>

                {/* Parent rating section */}
                <div className='pr-3 border-r border-slate-300 w-[40%]'>
                  <div className='text-4xl'>4.6</div>
                  <Rate disabled allowHalf defaultValue={4.6} className='mr-3 text-md my-2' />
                  <div>1062 ratings</div>
                </div>

                {/* Fraction ratings section */}
                <div>
                  <div className='flex items-center'>
                    <Rate disabled defaultValue={5} className='mr-3 text-sm' />
                    <p>798</p>
                  </div>
                  <div className='flex items-center'>
                    <Rate disabled defaultValue={4} className='mr-3 text-sm' />
                    <p>798</p>
                  </div>
                  <div className='flex items-center'>
                    <Rate disabled defaultValue={3} className='mr-3 text-sm' />
                    <p>798</p>
                  </div>
                  <div className='flex items-center'>
                    <Rate disabled defaultValue={2} className='mr-3 text-sm' />
                    <p>798</p>
                  </div>
                  <div className='flex items-center'>
                    <Rate disabled defaultValue={1} className='mr-3 text-sm' />
                    <p>798</p>
                  </div>
                </div>
              </div>

              <hr/>
              {/* Uploaded photos section */}
              <div className='bg-[--white-color] flex p-3 gap-3 '>
                <button className='flex items-center bg-[--light-color] px-3 rounded-lg text-sm py-1 gap-2'><IoMdCamera /> Photos(208)</button>
                <button className='flex items-center bg-[--light-color] px-3 rounded-lg text-sm py-1 gap-1'><FaStar className='text-yellow-400'/>5</button>
                <button className='flex items-center bg-[--light-color] px-3 rounded-lg text-sm py-1 gap-1'><FaStar className='text-yellow-400'/>4</button>
                <button className='flex items-center bg-[--light-color] px-3 rounded-lg text-sm py-1 gap-1'><FaStar className='text-yellow-400'/>3</button>
                <button className='flex items-center bg-[--light-color] px-3 rounded-lg text-sm py-1 gap-1'><FaStar className='text-yellow-400'/>2</button>
                <button className='flex items-center bg-[--light-color] px-3 rounded-lg text-sm py-1 gap-1'><FaStar className='text-yellow-400'/>1</button>
              </div>
            </div>
            {/* Second 50% for shop details */}
            <div className='w-[50%]'>
              <h3 className='my-3'>Shop Details</h3>

              <div className="bg-[--white-color] border border-slate-300">
                {/* Header section */}
                <div className='flex justify-between mx-5'>
                  <div>
                    <p className='text-sm mt-1'>Sold By</p>
                    <h3 className='text-lg font-medium'>Company Name</h3>
                  </div>
                  <Tooltip title="Chat with Seller">
                    <button className='flex items-center gap-2 text-[--primary-color] hover:text-[--secondary-color]' title="Chat with the seller">
                      <IoIosChatboxes/>
                      <h6>CHAT</h6>
                    </button>
                  </Tooltip>
                </div>

                <hr className='my-2'/>

                {/* body section  */}
                <div className='grid grid-cols-3'>
                    <div className='border-r border-slate-300 px-5'>
                      <h5>Possitive Seller Ratings</h5>
                      <div className='my-3 text-2xl text-center font-medium'>86%</div>
                    </div>
                    <div className='border-r border-slate-300 px-5'>
                      <h5>Ship on Time</h5>
                      <div className='my-3 text-2xl text-center font-medium'>86%</div>
                    </div>
                    <div className='px-5'>
                      <h5>Chat Response Rate</h5>
                      <div className='my-3 text-2xl text-center font-medium'>96%</div>
                    </div>
                </div>

                <hr className='mt-2'/>

                {/* footer section */}
                <div>
                  <button className='text-center w-full py-2 bg-slate-100'>Visit Store</button>
                </div>
              </div>
            </div>
            
          </div>
          {/* detailed review section  */}
          <div className=''>
            <hr />
            <ReviewCard />
            <hr />
            <ReviewCard />
            <hr />
            <ReviewCard />
            <hr />
            <ReviewCard />
            <hr />
          </div>
          <div className='bg-[--white-color] p-5 mt-2'>
            <h3 className='text-3xl font-semibold'>Complete details about this products.</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatibus laborum fuga facere quam itaque aperiam distinctio consequuntur? Molestiae vel repellendus perferendis consequatur voluptates, alias ab sequi mollitia fugit ratione nihil officia ipsam laudantium iste ullam impedit expedita velit veritatis tenetur eveniet illum vitae at. Earum temporibus nemo, autem numquam, sed consequuntur dignissimos non rem quaerat dolorum illum a mollitia voluptatum aliquam est, totam dolorem maxime magni quam molestias inventore odit? Aut cumque et, error aliquid odit culpa quod, quam quas ab quibusdam nihil harum ut sit voluptates illum voluptatum non doloremque blanditiis. Nemo veniam nesciunt fuga dolores! Sit, nostrum.
          </div>
        </div>

        {/* third 14% for related products */}
        <div className='w-[14%]'>
          <h3 className='my-3'>Related Products</h3>
          <div className='flex flex-wrap gap-2'>
            <ProductCard item={item}/>
            <ProductCard item={item}/>
            <ProductCard item={item}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct;
