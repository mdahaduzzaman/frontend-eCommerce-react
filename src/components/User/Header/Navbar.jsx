import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { LuSunMoon } from "react-icons/lu";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";

import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function Navbar() {
    const [darkMode, setDarkMode] = useState(false)
    const [dropdownVisible, setDropdownVisible] = useState(false)

    const toggleDropdown = (isVisible) => {
        setDropdownVisible(isVisible);
    };

    const location = useLocation();
    const currentURL = location.pathname;
    
    return (
        <div className="relative">
            <div className="fixed overflow-hidden z-50 text-[--white-color] w-screen">
                <div className="bg-[--primary-color] flex gap-5 text-[.8rem] px-10 pt-1">
                    <Link to="seller/">Become a Seller</Link>
                    <a href="">Donate eCommerce</a>
                    <a href="">Help & Support</a>
                </div>
                <nav className='bg-[--primary-color] flex gap-3 px-10 py-5 items-center relative'>
                    <h1 className='navbar-brand text-4xl font-semibold'><Link to="/">eCommerce</Link></h1>
                    {
                        currentURL != '/' ? 
                        <a
                            className={`flex items-center gap-2 cursor-pointer px-3 py-1 rounded-lg ${dropdownVisible ? 'bg-[--secondary-color]' : ''}`}
                            onMouseOver={() => toggleDropdown(true)}
                            onMouseOut={() => toggleDropdown(false)}
                        > Categories {dropdownVisible ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
                        </a> : ''
                    }

                    <div className="relative">
                        <form action="">
                            <input type="text" name="" id="" placeholder='Search in eCommerce' className={`${currentURL != '/' ? 'w-[35rem]' : 'w-[42rem]'} rounded-xl py-2 text-[--dark-color] outline-none ps-4`} />
                        </form>
                        <div className="absolute right-2 top-[50%] translate-y-[-50%] bg-[--light-color] py-1 px-3 rounded-md">
                            <CiSearch className="text-[--primary-color] text-xl" />
                        </div>
                    </div>
                    <NavLink to="/login" className="nav-btn"><FaRegUser />Login</NavLink>|
                    <NavLink to="/signup" className="nav-btn">Sign Up</NavLink>|
                    <NavLink to="/carts" className="nav-btn"><FiShoppingCart />Cart</NavLink>
                    <div className="absolute right-3 top-[-1rem] cursor-pointer hover:bg-[--secondary-color] p-2 rounded-lg text-2xl">
                        {
                            darkMode ? <LuSunMoon /> : <BsMoonStars className="text-lg text-[--dark-color]" />
                        }
                    </div>
                </nav>
            </div>
            {/* To keep the header size reserved */}
            <div className="pt-[6.4rem] overflow-hidden"></div>            
        </div>
    )
}

export default Navbar