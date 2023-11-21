import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, Route,
  RouterProvider, createRoutesFromElements
} from "react-router-dom";

// internal imports
import './index.css'
import Layout from './Layout.jsx'
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import CartPage from './pages/CartPage.jsx';

// Router Creating
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />}/>
    <Route path='login' element={<Login />} />
    <Route path='Signup' element={<Signup />} />
    <Route path='products' element={<ProductsPage />} />
    <Route path='carts' element={<CartPage />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
