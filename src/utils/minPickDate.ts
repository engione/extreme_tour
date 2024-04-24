export const minPickDate = () => {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const minDate = `${year}-${month}-${day}`;
  return minDate;
};
