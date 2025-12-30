const convertAndFormatPrice = (amount: number) => {
  const exchangeRate = 84.5;
  const finalAmount = amount < 1000 ? amount * exchangeRate : amount;

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(finalAmount);
};

export default convertAndFormatPrice;
