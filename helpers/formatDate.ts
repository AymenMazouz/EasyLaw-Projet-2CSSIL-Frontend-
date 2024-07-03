function formatDateToYYYYMMDD(date: Date | undefined) {
  if (date === undefined) return;
  const year = date?.getFullYear();
  const month = date?.getMonth() + 1;
  const day = date?.getDate();

  const newMonth = month < 10 ? "0" + month : month;
  const newDay = day < 10 ? "0" + day : day;

  return year + "/" + newMonth + "/" + newDay;
}

export { formatDateToYYYYMMDD };
