import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

// internal imports
import './index.css';
import UserLayout from './layouts/UserLayout.jsx';
import SellerLayout from './layouts/SellerLayout.jsx';
import AdminLayout from './layouts/AdminLayout.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Carts from './pages/Carts.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import SellerHome from './components/Seller/SellerHome.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<UserLayout />}
        >
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="products/*" element={<Products />}>
            <Route path=":product_id" element={<SingleProduct />} />
          </Route>
          <Route path="carts" element={<Carts />} />
        </Route>
        <Route path="/seller" element={<SellerLayout />}>
          <Route index element={<SellerHome />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          {/* Add admin-specific routes here */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
