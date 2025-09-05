import React, { useState } from "react";
import "./CategorySelector.css";

const categories = {
  Thangka: ["Mandala", "Figure"],
  "Singing Bowl": ["S1", "S2", "S3"],
  Lockets: ["L1", "L2", "L3"],
  Accessories: ["A1", "A2", "A3"],
};

// Real product data for Thangka
const productsData = [
  {
    name: "喜马拉雅画卷珍品",
    desc: "艺术风景画作画手工，定制绘画作品",
    price: "¥9,680",
    image: "./images/thangka/5.jpeg",
    gradient: "linear-gradient(rgba(70,130,180,0.2), rgba(135,206,235,0.2))",
    hot: true,
  },
  {
    name: "铜波可唐卡",
    desc: "精致手工艺术品, 是您的收藏珍品收藏值得拥有",
    price: "¥5,880",
    image: "./images/singing_bowl/R.jpeg",
    gradient: "linear-gradient(rgba(139,0,0,0.2), rgba(205,92,92,0.2))",
    hot: true,
  },
  {
    name: "7件套颂钵组合",
    desc: "喜马拉雅地区手工，配件齐备贴心服务",
    price: "¥4,280",
    image: "./images/thangka/4.jpeg",
    gradient: "linear-gradient(rgba(218,165,32,0.2), rgba(255,215,0,0.2))",
    hot: true,
  },
];

// Simple product mapping for other categories
const products = {
  Figure: productsData, // real products for Thangka → T1
  Mandala: [{ name: "Thangka Product 3", price: "¥3,000" }],

  S1: [{ name: "Singing Bowl 1" }, { name: "Singing Bowl 2" }],
  S2: [{ name: "Singing Bowl 3" }],
  S3: [{ name: "Singing Bowl 4" }],

  L1: [{ name: "Locket 1" }, { name: "Locket 2" }],
  L2: [{ name: "Locket 3" }],
  L3: [{ name: "Locket 4" }],

  A1: [{ name: "Accessory 1" }],
  A2: [{ name: "Accessory 2" }, { name: "Accessory 3" }],
  A3: [{ name: "Accessory 4" }],
};

export default function CategorySelector() {
  const [selectedCategory, setSelectedCategory] = useState("Thangka");
  const [selectedSubCategory, setSelectedSubCategory] = useState("T1");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const firstSub = categories[category][0];
    setSelectedSubCategory(firstSub);
  };

  return (
    <div className="category-container" id="categorySection">
      {/* Main Categories */}
      <div className="categories">
        {Object.keys(categories).map((cat) => (
          <span
            key={cat}
            className={`category ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Subcategories */}
      <div className="subcategories">
        {categories[selectedCategory].map((sub) => (
          <span
            key={sub}
            className={`subcategory ${
              selectedSubCategory === sub ? "active" : ""
            }`}
            onClick={() => setSelectedSubCategory(sub)}
          >
            {sub}
          </span>
        ))}
      </div>

      {/* Products */}
      <div className="products">
        {products[selectedSubCategory]?.map((p, idx) => (
          <div
            key={idx}
            className="product-card"
            style={{
              background: p.gradient || "white",
            }}
          >
            {p.image && <img src={p.image} alt={p.name} />}
            <h4>{p.name}</h4>
            {p.desc && <p>{p.desc}</p>}
            {p.price && <div className="price">{p.price}</div>}
            {p.hot && <span className="badge">🔥 热卖</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
