import React from "react";
import ecommerceBg from "../pictures/ecommerce.webp";
import "../index.css";

const homeStyle = {
  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${ecommerceBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  minHeight: "80vh",
  padding: "4rem",
  borderRadius: "12px"
};

function Home() {
  return (
    <div className="page" style={homeStyle}>
      <h1>Welcome to Stylish Shop</h1>
      <p>
        Discover premium tech that transforms your daily life. Elevate your
        experience with products designed for innovation, comfort, and class.
        💻📱🕒
      </p>
      <p>
        Explore, enjoy, and engage with our top-selling devices built just for
        you! Start your journey to better living today.
      </p>
      <button className="cta-button" onClick={() => window.location.href = '/products'}>
        Shop Now
      </button>
    </div>
  );
}

export default Home;