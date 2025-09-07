import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand / Logo */}
        <div className="footer-section">
          <h2 className="footer-logo">尼泊尔珍宝</h2>
          <p className="footer-text">
            探索喜马拉雅山脉的精湛瑰宝——唐卡、佛像、颂钵与绘画。<br />
            弘扬传统工艺，传递文化价值。
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h3 className="footer-title">快速导航</h3>
          <ul className="footer-links">
            <li><a href="#">首页</a></li>
            <li><a href="#">唐卡</a></li>
            <li><a href="#">佛像</a></li>
            <li><a href="#">颂钵</a></li>
            <li><a href="#">绘画</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3 className="footer-title">联系我们</h3>
          <ul className="footer-contact">
            <li>📞 电话: +86 123 4567 890</li>
            <li>✉️ 邮箱: info@nepalart.cn</li>
            <li>📍 地址: 加德满都, 尼泊尔</li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3 className="footer-title">关注我们</h3>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2025 尼泊尔珍宝 | 版权所有
      </div>
    </footer>
  );
}
