import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "context/cartContext";
import "./Card.css";

export const ProductCard = ({ item }) => {
  const { _id, img, heading, price, size, brand, assured } = item;

  const { cartData, setCartData } = useCart();

  const cardHandler = () => {
    let data = cartData.find((el) => el._id === _id);
    if (data) {
      setCartData(
        cartData.map((ele) => {
          if (ele._id === _id) {
            return { ...ele, quantity: ele.quantity + 1 };
          } else {
            return { ...ele };
          }
        })
      );
    } else {
      setCartData([...cartData, { item, quantity: 1 }]);
    }
  };



  return (
    <div className="product-card">
      <div>
        <img className="card-img" src={img} alt="" />
      </div>
      <div className="card-info">
        <div className="card-info-child">
          <p>{heading}</p>
          <img className="assured" src={assured} alt="" />
        </div>
        <div className="card-info-child">
          <p>{price.ourPrice}</p>
          <p>{price.originalPrice}</p>
        </div>
        <div className="card-info-child">
          <p>Brand: {brand}</p>
          <p>Size: {size}</p>
        </div>
        <div>
          {cartData?.length &&
          cartData?.find((ele) => ele?.item?._id === _id) ? (
            <Link to="/cart">
              <button className="btn-secondary">Go To Cart</button>
            </Link>
          ) : (
            <button className="btn-primary" onClick={cardHandler}>
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
