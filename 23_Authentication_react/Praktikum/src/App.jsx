import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import LandingPage from "./pages/LandingPage";
import ProductDetail from "./pages/ProductDetail"; 
import FormLogin from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/formlogin" element = {<FormLogin/>}/>
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
export default App;
