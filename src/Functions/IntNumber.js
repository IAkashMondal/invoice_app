export const formatCurrency = (value) => {
  if (value === undefined || isNaN(value)) {
    return "Invalid input. Please provide a valid numeric value.";
  }

  // Use Intl.NumberFormat for currency formatting
  const formattedCurrency = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(value);

  // Remove the currency symbol from the formatted value
  const numericPart = formattedCurrency.replace(/[^0-9,.]/g, "");

  return numericPart;
};
