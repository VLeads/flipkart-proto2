const getNumberFromFormattedPrice = (price) => {
  return Number(price.replace(/\D/g, ""));
};
export { getNumberFromFormattedPrice };
