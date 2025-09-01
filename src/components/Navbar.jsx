import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">🏠 尼泊尔珍宝</div>
        <ul className="nav-menu">
          <li><a href="#home">首页</a></li>
          <li><a href="#tangka">唐卡</a></li>
          <li><a href="#buddha">佛像</a></li>
          <li><a href="#bowls">颂钵</a></li>
          <li><a href="#paintings">绘画</a></li>
        </ul>
        <div className="nav-icons">
          <span>🌐</span>
          <span>🔍</span>
          <span>🛒</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
