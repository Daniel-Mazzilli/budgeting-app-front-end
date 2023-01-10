const dateFormatter = (date) => {
  const dateSplit = date.split("-");
  const dateEdit = new Date(dateSplit);
  const dateFormatted = dateEdit.toLocaleString("default", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return dateFormatted;
};

export { dateFormatter };
