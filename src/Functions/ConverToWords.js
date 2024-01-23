export const convertToWords = (value) => {
  if (value === undefined || isNaN(value)) {
    return "Invalid input. Please provide a valid numeric value.";
  }

  const units = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const teens = [
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  function convertNumberToWords(num) {
    if (num < 10) return units[num];
    if (num < 20) return teens[num - 11];
    return tens[Math.floor(num / 10)] + " " + units[num % 10];
  }

  function convertGroupToWords(group, isPaise) {
    const [thousands, hundreds, remainder] = group
      .toString()
      .padStart(5, "0")
      .match(/(\d{2})(\d)(\d{2})/)
      .slice(1);
    const result = [];

    if (thousands !== "00") {
      result.push(convertNumberToWords(parseInt(thousands, 10)) + " Thousand");
    }

    if (hundreds !== "0") {
      result.push(units[hundreds] + " Hundred");
    }

    if (remainder !== "00") {
      if (isPaise) {
        const paiseValue = parseInt(remainder, 10);
        result.push(
          convertNumberToWords(paiseValue) +
            (paiseValue === 1 ? " Paise" : " Paise")
        );
      } else {
        result.push(convertNumberToWords(parseInt(remainder, 10)));
      }
    }

    return result.join(" ");
  }

  const [rupees, paise] = value.toString().split(".");
  const rupeesInWords = convertGroupToWords(rupees, false);
  const paiseInWords = paise ? convertGroupToWords(paise, true) + " Paise" : "";

  const finalString =
    paiseInWords.length > 0.1
      ? `${rupeesInWords} Rupees and ${paiseInWords} only`
      : `${rupeesInWords} Rupees Only`;

  return finalString;
};
