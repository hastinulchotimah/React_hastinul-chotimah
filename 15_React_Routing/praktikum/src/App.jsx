import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import CreateProduct from './CreateProduct';
import LandingPage from './LandingPage';


function Routing() {
  return(
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Landing Page</Link>
          </li>
          <li>
            <Link to="/create-product">Create Product</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </div>
  )
}
export default Routing;
