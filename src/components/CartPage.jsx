import React, { useState } from "react";
import "./cart.css";

const initialCartData = [
  {
    id: 1,
    name: "古典唐卡 - 智慧之眼",
    price: 1200,
    quantity: 1,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlG3KmvomdooI0U3Ooi-51Wn9TfCEiwaU8oRl33Jf0NX1xpY9TTbhOeuVmAEZIpvR4CAB3HNwUU0vaRkb5yZY6u7g7uYVMPTzhmn79sW1WfPs0N2Zw9FEewhdwVarSXzLB_Z2dVWGh0hvoC5UcSdKfE6EqDeBaY1X0Rdghk_8-knecwyEJ6cCF0_fckRlXfJmwKY95pMDHx5pGD7KOtD5pjXu5uJhYPMpl23kYAQVHAwlinD8q1md-RgYv-ZlwOA9cNlgOkKh0DA"
  },
  {
    id: 2,
    name: "生命之轮唐卡 - 轮回",
    price: 800,
    quantity: 2,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFo8mTl8mm2U6hv-HRDP-ShGH6GToxExJEpzrHWqUUeL4gix44CpIidx8NjRtFnVLUR54Gx-9ob-L9AqvTBai4Bk68n9BBxBh3hXcYRazdVTnz0PGkg_rl25lP6xUyyUrpdi3uLbceNp__mCDnv7RmX7Ml0wUKC0PgYoX8MQh2L1SVK_PHGK19FjMDCVa8NqbPIiYQmQJs8S1qmbDYZ3hpAd9CVFKPsDnHuy3LXPtQ7uDQV5fH65Fg5QsK4QDdtYzORGaSZ3k3nQ"
  },
  {
    id: 3,
    name: "绿度母唐卡 - 慈悲",
    price: 1500,
    quantity: 1,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBy_mW-g6jgvL4TeEg0_k-X_A56PM3xNBDQ8xBpqBnhDH4EYFK5eHjpQgVe7YAi0va1h6Ug7B1j06Y_MSDZBaYy6LRUuV0mLftUaqLvLeiHuA_C68qcCSlt6E3snU51FKjU8222kLTcu-IBcg4lKLzgMuN3SYs7aDHUwIQIy6SBOEDbOS0Vmdtv-SLa4ysi4i3tZKeaKysrDJ1hQK1YeNs-pvqpVDS5GtnW7_K6VHdDvq7ig47uDAbTCd96rNNPjz40cdx5kC5Q1w"
  }
];

const CartPage = () => {
  const [cartData, setCartData] = useState(initialCartData);

  const handleQuantityChange = (id, delta) => {
    setCartData(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartData(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "24px" }}>我的购物车</h2>
        {cartData.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>单价: ¥{item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-controls">
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </div>
              <button className="delete-btn" onClick={() => handleDelete(item.id)}>删除</button>
            </div>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <h3>订单总览</h3>
        <div className="summary-item">
          <span>小计</span>
          <span>¥{subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>运费</span>
          <span>¥0.00</span>
        </div>
        <div className="summary-item total">
          <span>总计</span>
          <span>¥{subtotal.toFixed(2)}</span>
        </div>
        <button className="checkout-btn">结算</button>
        <button className="continue-btn">继续购物</button>
      </div>
    </div>
  );
};

export default CartPage;
