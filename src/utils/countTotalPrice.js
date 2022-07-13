import { getNumberFromFormattedPrice } from "./numberFormatter";

export const getPriceCardDetails = (details) => {
  let priceCardDetails = {
    items: 0,
    totalPrice: 0,
    discountPrice: 0,
  };

  priceCardDetails = details?.reduce(
    (acc, curr) => ({
      ...acc,
      items: acc.items + curr?.quantity,
      totalPrice:
        acc.totalPrice +
        getNumberFromFormattedPrice(curr.item.price.originalPrice) *
          curr.quantity,
      discountPrice:
        acc.discountPrice +
        curr.quantity *
          (getNumberFromFormattedPrice(curr.item.price.originalPrice) -
            getNumberFromFormattedPrice(curr.item.price.ourPrice)),
    }),
    priceCardDetails
  );

  return priceCardDetails;
};
