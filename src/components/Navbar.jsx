import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { LuSunMoon } from "react-icons/lu";
import { useState } from "react";
import { BsMoonStars } from "react-icons/bs";

function Navbar() {
    const [darkMode, setDarkMode] = useState(false)
  return (
    <div className="fixed z-10 overflow-hidden">
        <div className="bg-[--primary-color] flex gap-5 text-[.8rem] px-10 pt-1">
            <a href="">Become a Seller</a>
            <a href="">Donate eCommerce</a>
            <a href="">Help & Support</a>
        </div>
        <nav className='bg-[--primary-color] flex gap-3 px-10 py-5 items-center relative'>
            <h1 className='navbar-brand text-4xl font-semibold'><a href="">eCommerce</a></h1>
            <div className="relative">
                <form action="">
                    <input type="text" name="" id="" placeholder='Search in eCommerce' className='w-[42rem] rounded-xl py-2 text-[--dark-color] outline-none ps-4'/>
                </form>
                <div className="absolute right-2 top-[50%] translate-y-[-50%] bg-[--light-color] py-1 px-3 rounded-md">
                    <CiSearch className="text-[--primary-color] text-xl"/>
                </div>
            </div>
            <a href="" className="nav-btn"><FaRegUser />Login</a>|
            <a href="" className="nav-btn">Sign Up</a>|
            <a href="" className="nav-btn"><FiShoppingCart />Cart</a>
            <div className="absolute right-3 top-[-1rem] cursor-pointer hover:bg-[--secondary-color] p-2 rounded-lg text-2xl">
                {
                    darkMode?<LuSunMoon />:<BsMoonStars className="text-lg text-[--dark-color]" />
                }
            </div>
        </nav>
    </div>
  )
}

export default Navbar