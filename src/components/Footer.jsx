import bkash from '../assets/bkash.png'
import instagram from '../assets/instagram.jpeg'

function Footer() {
    const paymentMethodsList = [bkash, bkash, bkash, bkash]
    const socialMediaList = [instagram, instagram, instagram, instagram]
  return (
    <footer className='grid grid-cols-4 gap-10 mx-10 text-[--dark-color]'>
        <div className=''>
            <h3 className='text-[--primary-color] text-2xl mb-3'>Customer Care</h3>
            <ul>
                <li className='hover:underline'><a href="">Help Center</a></li>
                <li className='hover:underline'><a href="">How to Buy</a></li>
                <li className='hover:underline'><a href="">Returns & Refunds</a></li>
                <li className='hover:underline'><a href="">Contact Us</a></li>
                <li className='hover:underline'><a href="">Terms & Conditions</a></li>
                <li className='hover:underline'><a href="">Central Complain Management System</a></li>
            </ul>
        </div>             
        <div className=''>
            <h3 className='text-[--primary-color] text-2xl mb-3'>eCommerce</h3>
            <ul>
                <li className='hover:underline'><a href="">About eCommerce</a></li>
                <li className='hover:underline'><a href="">Digital Payments</a></li>
                <li className='hover:underline'><a href="">eCommerce Blog</a></li>
                <li className='hover:underline'><a href="">eCommerce Mart</a></li>
                <li className='hover:underline'><a href="">Privacy Policy</a></li>
                <li className='hover:underline'><a href="">eCommerce Exclusive</a></li>
            </ul>
        </div>             
        <div className=''>
            <h3 className='text-[--primary-color] text-2xl mb-3'>Payment Methods</h3>
            <div className='grid grid-cols-4 gap-3'>
                {
                    paymentMethodsList.map((curElem, index)=>(
                        <img src={curElem} alt="" key={index}/>
                    ))
                }
            </div>
        </div>             
        <div className=''>
            <h3 className='text-[--primary-color] text-2xl mb-3'>Follow Us</h3>
            <div className="grid grid-cols-5 gap-3">
                {
                    socialMediaList.map((curElem, index)=>(
                        <a href="" key={index}>
                            <img src={curElem} alt="" />
                        </a>
                    ))
                }
            </div>
        </div>             
    </footer>
  )
}

export default Footer