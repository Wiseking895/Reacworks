import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">🏠 Home</Link>
      <Link to="/about">ℹ️ About</Link>
      <Link to="/products">🛒 Products</Link>
    </nav>
  );
}

export default Navbar;
