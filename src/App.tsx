import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Contact from "./pages/Contact";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-slate-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
