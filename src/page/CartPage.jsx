import React, { useState } from "react";
import "../assets/css/cart.css";

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

export default function CartPage() {
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
    <div className="cart-page">
      <header className="cart-header">
        <h1>我的购物车</h1>
        <p className="cart-desc">在这里查看并编辑您的订单 — 我们支持简体中文界面。</p>
      </header>

      <main className="cart-grid">
        <section className="cart-list">
          {cartData.length === 0 ? (
            <div className="empty-state">
              <p>购物车为空，去逛逛吧！</p>
              <button className="btn-outline">继续购物</button>
            </div>
          ) : (
            cartData.map(item => (
              <article key={item.id} className="cart-card">
                <div className="card-media">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="card-body">
                  <h2 className="item-name">{item.name}</h2>
                  <p className="item-price">单价：<span className="price">¥{item.price.toFixed(2)}</span></p>

                  <div className="controls-row">
                    <div className="quantity">
                      <button
                        aria-label="减少数量"
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="qty-btn"
                      >
                       - 
                      </button>
                      <span className="qty-val">{item.quantity}</span>
                      <button
                        aria-label="增加数量"
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="qty-btn"
                      >
                        +
                      </button>
                    </div>

                    <div className="card-actions">
                      <button className="btn-text" onClick={() => handleDelete(item.id)}>删除</button>
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </section>

        <aside className="order-summary">
          <h3>订单总览</h3>
          <div className="summary-row">
            <span>小计</span>
            <strong>¥{subtotal.toFixed(2)}</strong>
          </div>

          <div className="summary-row muted">
            <span>运费</span>
            <span>¥0.00</span>
          </div>

          <div className="summary-row total">
            <span>总计</span>
            <strong>¥{subtotal.toFixed(2)}</strong>
          </div>

          <button className="btn-primary">结算</button>
          <button className="btn-outline">继续购物</button>

          <p className="note">安全支付 · 30天无忧退货 · 客服：support@example.com</p>
        </aside>
      </main>

      
    </div>
  );
}