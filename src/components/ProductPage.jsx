import React, { useState } from "react";
import "./ProductPage.css"; // Make sure this path is correct

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [frame, setFrame] = useState("framed"); // Default to 'framed'
  const [activeImage, setActiveImage] = useState("/images/thangka/2.jpeg"); // Default main image

  // Array of image paths for the gallery and thumbnails
  const images = [
    "/images/thangka/1.jpeg",
    "/images/thangka/2.jpeg",
    "/images/thangka/3.jpeg",
    "/images/thangka/4.jpeg",
  ];

  // Handler to change the quantity, ensuring it doesn't go below 1
  const changeQuantity = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div className="product-page">
      <div className="main-content">
        {/* Product Gallery Section */}
        <div className="product-gallery">
          {/* Main displayed image */}
          <img src={activeImage} alt="Main Thangka" className="main-image" />
          {/* Thumbnail images */}
          <div className="thumbnails">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i + 1}`}
                className={`thumbnail ${activeImage === img ? "active" : ""}`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Information Section */}
        <div className="product-info">
          <h1 className="product-title">Buddha Thangka Painting</h1>
          <div className="price">$199.99</div>

          {/* Frame Options */}
          <div className="frame-options">
            <button
              className={`frame-btn ${frame === "framed" ? "active" : ""}`}
              onClick={() => setFrame("framed")}
            >
              Framed
            </button>
            <button
              className={`frame-btn ${frame === "unframed" ? "active" : ""}`}
              onClick={() => setFrame("unframed")}
            >
              Unframed
            </button>
          </div>

          {/* Quantity Selector */}
          <div className="quantity">
            <button className="qty-btn" onClick={() => changeQuantity(-1)}>
              -
            </button>
            {/* Input is readOnly to prevent direct manual input issues */}
            <input type="number" value={quantity} readOnly className="qty-input" />
            <button className="qty-btn" onClick={() => changeQuantity(1)}>
              +
            </button>
            <div className="stock-info">Only 7 left in stock</div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="add-to-cart">🛒 Add to Cart</button>
            <button className="buy-now">💨 Buy Now</button>
          </div>

          {/* Product Benefits Section (example) */}
          <div className="benefits">
            <div className="benefit">
              <span className="info-icon">⭐</span> Authentic
            </div>
            <div className="benefit">
              <span className="info-icon">✨</span> Handcrafted
            </div>
            <div className="benefit">
              <span className="info-icon">🎁</span> Free Shipping
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="related-products">
        <h2 className="section-title">Related Thangka Paintings</h2>
        <div className="products-grid">
          {/* Example related product cards */}
          {images.slice(0, 4).map((img, i) => ( // Using slice to show a few examples
            <div className="product-card" key={i}>
              <div className="product-image-wrapper"> {/* Wrapper for positioning add-btn */}
                <img src={img} alt={`Related Product ${i + 1}`} className="product-image" />
                <button className="add-btn">➕</button> {/* Add button for quick add */}
              </div>
              <div className="product-details">
                <div className="product-name">Thangka {i + 1}</div>
                <div className="product-price">$149.99</div>
              </div>
            </div>
          ))}
        </div>
        <a href="/related" className="view-all">View All Related Products &rarr;</a>
      </div>
    </div>
  );
}