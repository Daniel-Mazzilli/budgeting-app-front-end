const dateFormatter = (date, month) => {
  const dateSplit = date.split("-");
  const dateEdit = new Date(dateSplit);
  const dateFormatted = dateEdit.toLocaleString("default", {
    year: "numeric",
    month: month,
    day: "numeric",
  });
  return dateFormatted;
};

const amountFormatter = (number) => {
  let integer;
  let decimals = ".00";
  const isNegative = number < 0 ? true : false;

  if (String(number).includes(".")) {
    const numFixed = number.toFixed(2);
    const numFixedSplit = numFixed.split(".");
    integer = numFixedSplit[0];
    decimals = `.${numFixedSplit[1]}`;
  } else {
    integer = number;
  }

  integer = String(integer)
    .replace("-", "")
    .split("")
    .reverse()
    .map((e, i) => ((i + 1) % 4 === 0 ? `${e},` : e))
    .reverse()
    .join("");

  return isNegative ? `-$${integer}${decimals}` : `$${integer}${decimals}`;
};

export { dateFormatter, amountFormatter };
