import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Categories from "./components/Categories.jsx";
import Product from "./components/Product.jsx";
import Story from "./components/Story.jsx";
import CategorySelector from "./components/CategorySection.jsx";
import CulturalExchange from "./components/CulturalExchange.jsx";
import AdminAddProduct from "./components/Admin.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Categories />
              <Product />
              <Story />
              <CategorySelector />
              <CulturalExchange />
            </>
          }
        />

        {/* Admin Page ( /admin ) */}
        <Route path="/admin" element={<AdminAddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
