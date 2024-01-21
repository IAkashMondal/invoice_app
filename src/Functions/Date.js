export const GetCurrentDate = () => {
  const currentDate = new Date();

  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    currentDate
  );
  const year = currentDate.getFullYear().toString().slice(-2);

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
};
