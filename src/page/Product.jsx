import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/css/product.css"
const Product = () => {
  const hotProducts = [
    {
      name: '喜马拉雅画卷珍品',
      desc: '艺术风景画作画手工，定制绘画作品',
      price: '¥9,680',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
      hot: true
    },
    {
      name: '铜制释迦牟尼佛',
      desc: '纯手工打造铜制释迦牟尼佛像',
      price: '¥15,800',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=300&fit=crop',
      hot: true
    },
    {
      name: '传统手工颂钵',
      desc: '纯手工锻造传统西藏颂钵',
      price: '¥3,800',
      image: 'https://images.unsplash.com/photo-1582747652946-63e4e52f8a5b?w=300&h=300&fit=crop',
      hot: true
    }
  ];

  return (
    <section className="products">
      <div className="container">
        <h2 className="section-title">热销产品</h2>
        <p className="products-subtitle">
          我们精选的尼泊尔传统珍品大合集，每一件都是精挑细选的手工艺精品
        </p>

        <div className="products-grid">
      {hotProducts.map((product, index) => (
        <div className="product-card" key={index}>
          <Link to={`/product/${product.id}`}> {/* Optional: dynamic route */}
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              {product.hot && <span className="hot-badge">🔥 热销</span>}
            </div>
            <div className="product-text" id="p-text">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              <div className="product-price-action">
                <span className="price">{product.price}</span>
                <button className="add-to-cart">🛒 加入购物车</button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>

        <div className="view-more">
          <button className="view-more-btn">查看全部产品</button>
        </div>
      </div>
    </section>
  );
};

export default Product;