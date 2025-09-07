// src/components/Categories.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

// ===== Dummy Products Data =====
export const allProducts = [
  // 唐卡
  {
    id: 1,
    name: "金刚界曼达拉",
    desc: "精美手工绘制金刚界曼达拉唐卡",
    price: "¥8,800",
    image: "../images/thangka/1.jpeg",
    hot: true,
    category: "唐卡",
    subcategory: "曼达拉",
  },
  {
    id: 2,
    name: "时轮曼达拉",
    desc: "传统彩绘时轮曼达拉唐卡",
    price: "¥7,200",
    image: "../images/thangka/2.jpeg",
    hot: false,
    category: "唐卡",
    subcategory: "曼达拉",
  },
  {
    id: 3,
    name: "释迦牟尼佛唐卡",
    desc: "手工绘制释迦牟尼佛像唐卡",
    price: "¥6,800",
    image: "../images/thangka/3.jpeg",
    hot: true,
    category: "唐卡",
    subcategory: "佛像画",
  },
  {
    id: 4,
    name: "阿弥陀佛唐卡",
    desc: "传统描金阿弥陀佛唐卡",
    price: "¥9,200",
    image: "../images/thangka/4.jpeg",
    hot: false,
    category: "唐卡",
    subcategory: "佛像画",
  },
  {
    id: 5,
    name: "大黑天唐卡",
    desc: "威严庄重的大黑天护法唐卡",
    price: "¥12,500",
    image: "../images/thangka/5.jpeg",
    hot: true,
    category: "唐卡",
    subcategory: "护法神像",
  },
  {
    id: 6,
    name: "马头明王唐卡",
    desc: "马头明王手绘唐卡",
    price: "¥11,300",
    image: "../images/thangka/4.jpeg",
    hot: false,
    category: "唐卡",
    subcategory: "护法神像",
  },

  // 木雕
  {
    id: 7,
    name: "木雕观音像",
    desc: "楠木精雕观音立像",
    price: "¥4,500",
    image: "../images/thangka/1.jpeg",
    hot: true,
    category: "木雕",
    subcategory: "佛像",
  },
  {
    id: 8,
    name: "木雕弥勒佛",
    desc: "笑口常开的弥勒佛木雕",
    price: "¥3,800",
    image: "../images/thangka/1.jpeg",
    hot: false,
    category: "木雕",
    subcategory: "佛像",
  },
  {
    id: 9,
    name: "传统木窗格",
    desc: "尼泊尔工匠手工雕刻窗花",
    price: "¥2,600",
    image: "../images/thangka/1.jpeg",
    hot: true,
    category: "木雕",
    subcategory: "窗花",
  },
  {
    id: 10,
    name: "木质家用神龛",
    desc: "红木雕刻佛龛",
    price: "¥5,200",
    image: "../images/thangka/1.jpeg",
    hot: false,
    category: "木雕",
    subcategory: "神龛",
  },

  // 金属工艺
  {
    id: 11,
    name: "铜鎏金释迦牟尼佛像",
    desc: "铜胎鎏金佛像，庄严华美",
    price: "¥15,000",
    image: "../images/thangka/1.jpeg",
    hot: true,
    category: "金属工艺",
    subcategory: "佛像",
  },
  {
    id: 12,
    name: "铜供碗套装",
    desc: "手工敲制铜供碗一套七只",
    price: "¥2,200",
    image: "../images/thangka/1.jpeg",
    hot: false,
    category: "金属工艺",
    subcategory: "供器",
  },
  {
    id: 13,
    name: "金刚杵",
    desc: "精致雕花金刚杵",
    price: "¥1,800",
    image: "../images/thangka/1.jpeg",
    hot: true,
    category: "金属工艺",
    subcategory: "法器",
  },
  {
    id: 14,
    name: "法铃",
    desc: "配套法铃，工艺精美",
    price: "¥1,600",
    image: "../images/thangka/1.jpeg",
    hot: false,
    category: "金属工艺",
    subcategory: "法器",
  },

  // 首饰
  {
    id: 15,
    name: "绿松石耳环",
    desc: "藏式绿松石镶银耳环",
    price: "¥950",
    image: "../images/thangka/1.jpeg",
    hot: true,
    category: "首饰",
    subcategory: "耳环",
  },
  {
    id: 16,
    name: "珊瑚佛珠项链",
    desc: "天然红珊瑚手工项链",
    price: "¥2,500",
    image: "../images/thangka/1.jpeg",
    hot: true,
    category: "首饰",
    subcategory: "项链",
  },
  {
    id: 17,
    name: "铜镶嵌手镯",
    desc: "镶嵌绿松石的藏式手镯",
    price: "¥1,200",
    image: "../images/thangka/1.jpeg",
    hot: false,
    category: "首饰",
    subcategory: "手镯",
  },

  // 传统服饰
  {
    id: 18,
    name: "手工藏袍",
    desc: "传统花纹手工织造藏袍",
    price: "¥3,500",
    image: "../images/thangka/1.jpeg",
    hot: true,
    category: "传统服饰",
    subcategory: "藏袍",
  },
  {
    id: 19,
    name: "羊毛披肩",
    desc: "尼泊尔羊毛披肩，柔软保暖",
    price: "¥1,200",
    image: "../images/thangka/1.jpeg",
    hot: false,
    category: "传统服饰",
    subcategory: "披肩",
  },
  {
    id: 20,
    name: "藏式绣花帽",
    desc: "手工绣花藏式帽子",
    price: "¥600",
    image: "../images/thangka/1.jpeg",
    hot: false,
    category: "传统服饰",
    subcategory: "帽子",
  },

  // 手工艺品
  {
    id: 21,
    name: "手工藏纸笔记本",
    desc: "环保手工藏纸制作",
    price: "¥180",
    image: "../images/thangka/1.jpeg",
    hot: true,
    category: "手工艺品",
    subcategory: "纸艺",
  },
  {
    id: 22,
    name: "陶制茶壶",
    desc: "尼泊尔传统陶艺茶壶",
    price: "¥450",
    image: "../images/thangka/1.jpeg",
    hot: false,
    category: "手工艺品",
    subcategory: "陶艺",
  },
  {
    id: 23,
    name: "经幡挂饰",
    desc: "五色经幡挂饰",
    price: "¥250",
    image: "../images/thangka/1.jpeg",
    hot: true,
    category: "手工艺品",
    subcategory: "挂饰",
  },

  // 佛具用品
  {
    id: 24,
    name: "手持转经轮",
    desc: "铜质镶嵌宝石转经轮",
    price: "¥900",
    image: "../images/thangka/1.jpeg",
    hot: true,
    category: "佛具用品",
    subcategory: "转经轮",
  },
  {
    id: 25,
    name: "铜酥油灯",
    desc: "传统供佛铜酥油灯",
    price: "¥750",
    image: "../images/thangka/1.jpeg",
    hot: false,
    category: "佛具用品",
    subcategory: "酥油灯",
  },
  {
    id: 26,
    name: "菩提子念珠",
    desc: "108颗菩提子念珠",
    price: "¥1,100",
    image: "../images/thangka/1.jpeg",
    hot: true,
    category: "佛具用品",
    subcategory: "念珠",
  },
];

// ===== Categories Component =====
const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const categories = [...new Set(allProducts.map((p) => p.category))];
  const subcategories = selectedCategory
    ? [...new Set(allProducts.filter((p) => p.category === selectedCategory).map((p) => p.subcategory))]
    : [];

  const filteredProducts = allProducts.filter((p) => {
    if (selectedCategory && p.category !== selectedCategory) return false;
    if (selectedSubcategory && p.subcategory !== selectedSubcategory) return false;
    return true;
  });

  return (
    <section className="categories">
      <div className="container">
        <h2>分类商品</h2>

        {/* Category Filter */}
        <div className="filter-group">
          <h3>类别</h3>
          <div className="filter-options">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedSubcategory(null);
                }}
              >
                {cat}
              </button>
            ))}
            <button
              className="filter-btn clear"
              onClick={() => {
                setSelectedCategory(null);
                setSelectedSubcategory(null);
              }}
            >
              全部
            </button>
          </div>
        </div>

        {/* Subcategory Filter */}
        {selectedCategory && (
          <div className="filter-group">
            <h3>子类别</h3>
            <div className="filter-options">
              {subcategories.map((sub) => (
                <button
                  key={sub}
                  className={`filter-btn ${selectedSubcategory === sub ? "active" : ""}`}
                  onClick={() => setSelectedSubcategory(sub)}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <Link 
              to={`/product/${product.id}`} 
              key={product.id}
              className="product-card-link"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="product-card">
                <div className="product-image-wrapper">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                  <div className="product-price">{product.price}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Products */}
        {filteredProducts.length === 0 && <p className="no-products">暂无该分类下的商品</p>}
      </div>
    </section>
  );
};

export default Categories;