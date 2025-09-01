import React from 'react';

// Product data
const productsData = [
  {
    name: '喜马拉雅画卷珍品',
    desc: '艺术风景画作画手工，定制绘画作品',
    price: '¥9,680',
    image: './images/thangka/5.jpeg',
    gradient: 'linear-gradient(rgba(70,130,180,0.2), rgba(135,206,235,0.2))',
    hot: true,
  },
  {
    name: '铜波可唐卡',
    desc: '精致手工艺术品, 是您的收藏珍品收藏值得拥有',
    price: '¥5,880',
    image: './images/singing_bowl/R.jpeg',
    gradient: 'linear-gradient(rgba(139,0,0,0.2), rgba(205,92,92,0.2))',
    hot: true,
  },
  {
    name: '7件套颂钵组合',
    desc: '喜马拉雅地区手工，配件齐备贴心服务',
    price: '¥4,280',
    image: './images/thangka/4.jpeg',
    gradient: 'linear-gradient(rgba(218,165,32,0.2), rgba(255,215,0,0.2))',
    hot: true,
  },
];

// Single product card component
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div
        className="product-image"
        style={{
          background: `${product.gradient}, url(${product.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {product.hot && <div className="hot-badge">热销</div>}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.desc}</p>
        <div className="product-price">
          <span className="price">{product.price}</span>
          <button className="add-to-cart">🛒 加入购物车</button>
        </div>
      </div>
    </div>
  );
};

// Main products section
const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <h2 className="section-title">热销产品</h2>
        <p className="products-subtitle">
          我们精选的尼泊尔传统珍品大合集，每一件都是精挑细选的2个月现货珍藏版手工艺
        </p>

        <div className="products-grid">
          {productsData.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <div className="view-more">
          <button className="view-more-btn">查看全部产品</button>
        </div>
      </div>
    </section>
  );
};

export default Products;
