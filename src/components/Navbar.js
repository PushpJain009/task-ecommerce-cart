import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className="navbar">
      <h1>E-Commerce</h1>
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cartCount})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
