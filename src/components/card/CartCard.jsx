import React from "react";
import { useCart } from "context/cartContext";
import allProducts from "productsdata.json";

export const CartCard = ({ details, type }) => {
  const {
    item: { _id, img, heading, price, size, brand },
    quantity,
  } = details;

  const { cartData, setCartData, laterData, setLaterData } = useCart();

  const cardHandler = () => {
    let data = cartData.find((el) => el?.item?._id === _id);
    if (data) {
      setCartData(
        cartData.map((ele) => {
          if (ele?.item?._id === _id) {
            return { ...ele, quantity: ele.quantity + 1 };
          } else {
            return { ...ele };
          }
        })
      );
    } else {
      setCartData([
        ...cartData,
        { ...laterData.find((ele) => ele?.item?._id === _id) },
      ]);

      setLaterData(laterData.filter((ele) => ele?.item?._id !== _id));
    }
  };

  const decreaseHandler = () => {
    let itemCount = cartData.find((ele) => ele?.item?._id === _id).quantity;
    if (itemCount > 1) {
      setCartData(
        cartData.map((ele) => {
          if (ele?.item?._id === _id) {
            return { ...ele, quantity: ele.quantity - 1 };
          } else return { ...ele };
        })
      );
    } else {
      setCartData(cartData.filter((ele) => ele?.item?._id !== _id));
    }
  };

  const removeHandler = () => {
    setCartData(cartData.filter((ele) => ele?.item?._id !== _id));
  };

  const laterHandler = () => {
    setLaterData([
      ...laterData,
      { ...cartData.find((ele) => ele?.item?._id === _id) },
    ]);
    setCartData(cartData.filter((ele) => ele?.item?._id !== _id));
  };

  return (
    <div className="cart_card-container">
      <div className="cart_card-left">
        <img src={img} alt="" />
        <div className="counter">
          {cartData?.find((ele) => ele?.item?._id === _id) &&
          cartData?.some((ele) => ele?.quantity === 0) ? (
            <span className="btn-counter" style={{ backgroundColor: "red" }}>
              -
            </span>
          ) : (
            <span className="btn-counter" onClick={decreaseHandler}>
              -
            </span>
          )}
          {quantity}
          <span className="btn-counter" onClick={cardHandler}>
            +
          </span>
        </div>
      </div>
      <div className="cart_card-right">
        <div>
          <div>{heading}</div>
          <div>Size: {size}</div>
          <div>Brand: {brand}</div>
          <div>
            {price.ourPrice} <s>{price.originalPrice}</s>
          </div>
        </div>

        <div className="btn-action-wrapper">
          {laterData?.length &&
          laterData?.find((ele) => ele?.item?._id === _id) ? (
            <button className="btn-secondary btn-action " onClick={cardHandler}>
              MOVE TO CART
            </button>
          ) : (
            <button
              className="btn-secondary btn-action "
              onClick={laterHandler}
            >
              SAVE FOR LATER
            </button>
          )}
          <button className="btn-primary btn-action" onClick={removeHandler}>
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};
