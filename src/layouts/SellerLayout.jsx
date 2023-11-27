import { Outlet } from "react-router-dom";
import React from 'react'

import SellerNavbar from '../components/Seller/Header/SellerNavbar.jsx'
function SellerLayout() {
    return (
        <>
            <SellerNavbar />
            <Outlet />
            <h1>end Amin layouts</h1>
        </>
    )
}

export default SellerLayout