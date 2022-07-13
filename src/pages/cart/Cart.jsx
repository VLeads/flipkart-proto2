import { CartCard, PriceCard } from "components";
import { useCart } from "context/cartContext";
import React from "react";
import { getPriceCardDetails } from "utils/countTotalPrice";
import "./Cart.css";

export const Cart = () => {
  const { cartData, laterData } = useCart();

  return (
    <div className="cart-container">
      <div>
        <div className="cart-items">
          <div className="cart-heading">
            My Cart ({cartData?.length ? cartData.length : 0})
          </div>
          {cartData?.length ? (
            cartData?.map((details) => (
              <React.Fragment key={details._id}>
                <CartCard details={details} type="cart" />
              </React.Fragment>
            ))
          ) : (
            <div style={{ textAlign: "center", fontSize: "2rem" }}>
              Your cart is empty
            </div>
          )}
          <div>
            <button className="btn-primary">Place Order</button>
          </div>
        </div>
        <div className="cart-items">
          <div className="cart-heading">Saved for later </div>

          {laterData?.length ? (
            laterData?.map((details) => (
              <React.Fragment key={details._id}>
                <CartCard details={details} type="later" />
              </React.Fragment>
            ))
          ) : (
            <div style={{ textAlign: "center", fontSize: "2rem" }}>
              saved later is empty
            </div>
          )}
        </div>
      </div>
      <div className="cart-price-card">
        {cartData?.length !== 0 && (
          <PriceCard details={getPriceCardDetails(cartData)} />
        )}
      </div>
    </div>
  );
};
