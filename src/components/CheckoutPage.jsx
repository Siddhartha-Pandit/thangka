import React, { useState } from "react";
import "./checkout.css";

const initialCartItems = [
  {
    id: 1,
    name: "精美唐卡",
    price: 120,
    quantity: 1,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQoVXg56uXsf4sc1qnRQe3TDFbhoqm1zwpYdDbm79UUgO76TlVQJkxres6oWcJct32epcTvoF9cuIaLAzHKYcc6hBhGfM1yP4Hguarro04rMVb88eWrdTl7nr2-vaDkR3TEh_L0QSLKplhJO7ligAR1KDGMVmSQWzyDSVmXpf28DF5Q5pmbw_5aYAlWfDiBks8aoMql4MdUdL8k8EQRJC1lUY4QyCnGqfNP8-1fdKVXo2c8Wx5Oz0-zn56-l7KLPxV96J1D1MyCU_G"
  },
  {
    id: 2,
    name: "古典唐卡",
    price: 150,
    quantity: 1,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkigKele3VDvnbXOzxWdskwNQ22pbSpA-vZrJ_I3MD1zdA02ympc9-X8pWzbFmhxicU9sUx7G3ujd0m1Wl-MSZKY2TbkR-NClrRwTikZsugZ0LKiewFJyYYdsAcGs7904E45VzLwXPnGij-8h15-9Mqy-DxF5peEtkUjPmI14iFXJjfmxu3N1kLcssw8gnniBz493eOTo3Crrlec5tMbrYHmGW-wB1iK0kI-IHmvBTtHay7ev7shOVKFpKRLibc7A9YVu8ziBH7yt2"
  }
];

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    province: "",
    district: "",
    address: "",
    postalCode: ""
  });
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  const handleQuantityChange = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里你可以替换为真正的提交逻辑（API 调用等）
    alert("订单已提交!");
  };

  return (
    <div className="checkout-page">
      <main className="checkout-container">
        <h1 className="checkout-title">结算</h1>
        <form className="checkout-grid" onSubmit={handleSubmit}>

          {/* Contact & Shipping Info （第一行） */}
          <div className="contact-shipping">
            <div className="info-section">
              <h2>联系信息</h2>
              <div className="form-grid">
                <input type="text" name="name" placeholder="姓名" value={contactInfo.name} onChange={handleInputChange} required />
                <input type="email" name="email" placeholder="电子邮件" value={contactInfo.email} onChange={handleInputChange} required />
                <input type="tel" name="phone" placeholder="电话号码" value={contactInfo.phone} onChange={handleInputChange} />
              </div>
            </div>

            <div className="info-section">
              <h2>收货地址</h2>
              <div className="form-grid">
                <input type="text" name="country" placeholder="国家/地区" value={contactInfo.country} onChange={handleInputChange} />
                <input type="text" name="province" placeholder="省/市" value={contactInfo.province} onChange={handleInputChange} />
                <input type="text" name="district" placeholder="区/县" value={contactInfo.district} onChange={handleInputChange} />
                <input type="text" name="address" placeholder="详细地址" value={contactInfo.address} onChange={handleInputChange} />
                <input type="text" name="postalCode" placeholder="邮政编码" value={contactInfo.postalCode} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* Order Summary （第二行） */}
          <div className="order-summary full-width-card">
            <h2>订单摘要</h2>
            <ul className="summary-list">
              {cartItems.map(item => (
                <li key={item.id} className="summary-item">
                  <div className="item-image" style={{ backgroundImage: `url(${item.img})` }} aria-hidden="true"></div>
                  <div className="item-info">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">￥{item.price.toFixed(2)}</p>
                    <div className="quantity-controls">
                      <button type="button" onClick={() => handleQuantityChange(item.id, -1)} aria-label={`减少 ${item.name} 数量`}>-</button>
                      <span className="quantity">{item.quantity}</span>
                      <button type="button" onClick={() => handleQuantityChange(item.id, 1)} aria-label={`增加 ${item.name} 数量`}>+</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="summary-total">
              <div className="subtotal">
                <span>小计</span>
                <span>￥{subtotal.toFixed(2)}</span>
              </div>
              <div className="shipping">
                <span>运费</span>
                <span>￥{shipping.toFixed(2)}</span>
              </div>
              <div className="total">
                <span>总计</span>
                <span>￥{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Options （第三行） */}
          <div className="payment-section full-width-card">
            <h2>支付方式</h2>
            <div className="payment-options">
              <label className="radio-label">
                <input type="radio" name="payment" value="credit-card" checked={paymentMethod === "credit-card"} onChange={() => setPaymentMethod("credit-card")} />
                银行卡
              </label>
              <label className="radio-label">
                <input type="radio" name="payment" value="Alipay" checked={paymentMethod === "Alipay"} onChange={() => setPaymentMethod("Alipay")} />
                支付宝
              </label>
              <label className="radio-label">
                <input type="radio" name="payment" value="WeChat Pay" checked={paymentMethod === "WeChat Pay"} onChange={() => setPaymentMethod("WeChat Pay")} />
                微信支付
              </label>
            </div>

            <button type="submit" className="submit-btn">确认订单并支付</button>
          </div>

        </form>
      </main>
    </div>
  );
};

export default CheckoutPage;
