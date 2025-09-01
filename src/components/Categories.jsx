import React from 'react';

const categoriesData = [
  {
    title: '唐卡',
    desc: '传统手工艺术精湛艺术',
    image: './images/singing_bowl/OIP.webp',
    gradient: 'linear-gradient(rgba(139,69,19,0.3), rgba(210,105,30,0.3))',
  },
  {
    title: '佛像',
    desc: '精美手工制作的佛',
    image: './images/thangka/OIF.webp',
    gradient: 'linear-gradient(rgba(47,79,79,0.3), rgba(105,105,105,0.3))',
  },
  {
    title: '颂钵',
    desc: '传统西藏与尼泊尔工具',
    image: './images/thangka/1.jpeg',
    gradient: 'linear-gradient(rgba(218,165,32,0.3), rgba(255,215,0,0.3))',
  },
  {
    title: '绘画',
    desc: '传统尼泊尔手工绘画',
    image: './images/singing_bowl/3.jpeg',
    gradient: 'linear-gradient(rgba(70,130,180,0.3), rgba(135,206,235,0.3))',
  },
];

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <h2 className="section-title">精选类别</h2>
        <div className="category-grid">
          {categoriesData.map((category, index) => (
            <div className="category-card" key={index}>
              <div
                className="category-image"
                style={{
                  background: `${category.gradient}, url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="category-content">
                <h3 className="category-title">{category.title}</h3>
                <p className="category-desc">{category.desc}</p>
                <button className="category-btn">查看系列</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
