import React from "react";
import { getNumbersInLocaleFormat } from "utils/numberLocaleFormat";

export const PriceCard = ({ details }) => {
  const { totalPrice, discountPrice, items } = details;
  console.log("price", details);
  return (
    <div className="price-card-data">
      <h2>Price details</h2>
      <div>
        Price ({items}): ₹{getNumbersInLocaleFormat(totalPrice)}
      </div>
      <div>
        Discount ({items}): ₹{getNumbersInLocaleFormat(discountPrice)}
      </div>
      <div>
        Total Amount: ₹{getNumbersInLocaleFormat(totalPrice - discountPrice)}
      </div>
    </div>
  );
};
