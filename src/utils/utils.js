export const setSmallNumZero = (num) => {
  return num < 9 ? "0" + num : num;
};
export function getNameDay(date) {
  const dayNum = new Date(date).getDay();
  switch (dayNum) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wen";
    case 4:
      return "The";
    case 5:
      return "Fri";
    case 6:
      return "Sat";
    default:
      return "";
  }
}
