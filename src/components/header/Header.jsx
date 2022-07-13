import React from "react";
import { Link } from "react-router-dom";
import { ArrowDownIcon } from "assets/icons";
import { useCart } from "context/cartContext";
import "./Header.css";

export const Header = () => {
  const { cartData } = useCart();
  return (
    <div className="header-container">
      <div className="header-left">
        <Link to="/" style={{ textDecoration: "inherit", color: "white" }}>
          <p className="header-name">Flipkart</p>
        </Link>
        <input
          type="search"
          className="header-search"
          placeholder="Search for products, brands & more..."
        />
      </div>
      <div className="header-right">
        <p>
          Vishal <ArrowDownIcon />
        </p>
        <p>
          More <ArrowDownIcon />
        </p>
        <Link to="/cart" style={{ textDecoration: "inherit", color: "white" }}>
          <p>
            Cart-
            {cartData?.length ? cartData.length : 0}
          </p>
        </Link>
      </div>
    </div>
  );
};
