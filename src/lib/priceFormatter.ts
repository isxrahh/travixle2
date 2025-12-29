const convertAndFormatPrice = (priceObj: any) => {
  const usdAmount = priceObj?.extracted_price || 0;

  const exchangeRate = 84.5;
  const inrAmount = usdAmount * exchangeRate;

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(inrAmount);
};

export default convertAndFormatPrice;