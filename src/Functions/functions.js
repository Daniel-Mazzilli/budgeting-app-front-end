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

export { dateFormatter };
