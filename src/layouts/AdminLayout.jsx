import { Outlet } from "react-router-dom";

import React from 'react'


function AdminLayout() {
    return (
        <>
            <h1>start Admin layouts</h1>
            <Outlet />
            <h1>end Amin layouts</h1>
        </>
    )
}

export default AdminLayout