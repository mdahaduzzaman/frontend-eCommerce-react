import { Outlet } from "react-router-dom";

import React from 'react'
import Navbar from "../components/User/Header/Navbar";
import Footer from "../components/User/Footer/Footer";

function UserLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default UserLayout