import React from 'react';
import "../assets/css/hero.css"
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>尼泊尔传统艺术珍品</h1>
        <p>探索喜马拉雅山脉的传统黄金、唐卡、佛像、颂钵与绘画</p>
        <div className="hero-buttons">
          <a href = "#categorySection"><button className="btn-primary">立即探索</button></a>
          <button className="btn-secondary">了解更多</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
