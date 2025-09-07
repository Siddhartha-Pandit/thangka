import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import HeroPage from "./components/HeroPage.jsx";
import ProductPage from "./components/ProductPage.jsx";
import AdminAddProduct from "./components/Admin.jsx";

// Optional Sections (can be used inside HeroPage or other pages)
import Hero from "./components/Hero.jsx";
import Categories from "./components/Categories.jsx";
import Product from "./components/Product.jsx";
import Story from "./components/Story.jsx";
import CategorySelector from "./components/CategorySection.jsx";
import CulturalExchange from "./components/CulturalExchange.jsx";
import CartPage from "./components/CartPage.jsx";
import CheckoutPage from "./components/CheckoutPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HeroPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        {/* Product Page */}
        <Route path="/product/:id" element={<ProductPage />} />

        {/* Admin Page */}
        <Route path="/admin" element={<AdminAddProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
