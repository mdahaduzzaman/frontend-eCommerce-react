import { FaRegUser } from "react-icons/fa";


import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function SellerNavbar() {
    const [darkMode, setDarkMode] = useState(false)
    const [dropdownVisible, setDropdownVisible] = useState(false)

    const location = useLocation();
    const currentURL = location.pathname;
    
    return (
        <div className="relative">
            <div className="fixed overflow-hidden z-50 text-[--white-color] bg-[--primary-color] w-screen flex justify-between px-10 py-3">
                <h1 className='navbar-brand text-xl font-semibold'><Link to="/">eCommerce <br />Seller Center</Link></h1>
                <nav className='flex'>
                  <div className="flex items-center"><NavLink to="/seller/login" className="nav-btn"><FaRegUser />Login</NavLink>|</div>
                  <div className="flex items-center"><NavLink to="/seller/signup" className="nav-btn">Sign Up</NavLink>|</div>
                </nav>
            </div>
            {/* To keep the header size reserved */}
            <div className="pt-[5rem] overflow-hidden"></div>            
        </div>
    )
}

export default SellerNavbar