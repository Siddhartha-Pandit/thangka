import React, { useState } from "react";
import "./Admin.css"

export default function AdminAddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
    category: "",
    subCategory: "",
    image: "",
    hot: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Product:", formData); // 👈 just logs for now
    alert("Product form submitted! (not saved yet)");
  };

  return (
    <div className="admin-container">
      <h2 className="title">Add New Product</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            rows={3}
            required
          />
        </label>

        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="¥0.00"
            required
          />
        </label>

        <label>
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Thangka">Thangka</option>
            <option value="Singing Bowl">Singing Bowl</option>
            <option value="Lockets">Lockets</option>
            <option value="Accessories">Accessories</option>
          </select>
        </label>

        <label>
          Subcategory:
          <input
            type="text"
            name="subCategory"
            value={formData.subCategory}
            onChange={handleChange}
            placeholder="e.g. T1"
          />
        </label>

        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="./images/example.jpg"
          />
        </label>

        <label className="checkbox">
          <input
            type="checkbox"
            name="hot"
            checked={formData.hot}
            onChange={handleChange}
          />
          Mark as Hot Product
        </label>

        <button type="submit">Submit Product</button>
      </form>
    </div>
  );
}
