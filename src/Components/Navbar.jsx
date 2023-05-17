import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import "../styles.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">DipShop</Link>
      </p>

      <div className="right-things">
        <p className="logo login">Login</p>
        <button type="button" className="cart-icon">
          <AiOutlineShopping />
          <span className="cart-item-qty">0</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
