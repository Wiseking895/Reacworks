import React from "react";
import { Link } from "react-router-dom";
import phoneImg from "../pictures/iphone.webp";
import laptopImg from "../pictures/laptop1.webp";
import lgImg from "../pictures/lg1.webp";
import watchImg from "../pictures/smart1.webp";
import "../index.css";

const products = [
  { id: 1, name: "Smartphone", image: phoneImg, price: "$299" },
  { id: 2, name: "Laptop", image: laptopImg, price: "$799" },
  { id: 3, name: "LG TV", image: lgImg, price: "$599" },
  { id: 4, name: "Smartwatch", image: watchImg, price: "$149" }
];

function Products() {
  return (
    <div className="page">
      <h1>🛍️ Our Products</h1>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img
              src={p.image}
              alt={p.name}
              className="product-image"
            />
            <h2>{p.name}</h2>
            <p className="product-price">Price: {p.price}</p>
            <Link to={`/products/${p.id}`} className="details-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;