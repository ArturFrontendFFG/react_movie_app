export const DateDay = (date) => {
    const day = date.split('-')[2].substring(0,2)
    const remainder = day % 7
    return Days[remainder.toString()]
}
export const DateMonth = (date) => {
  const month = date.split('-')[1]; 
  return Months[`${month}`];
}
export const DateYear = (date) => {
  const year = date.split(`-`)[0];
  return year
}
export const Months = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December"
};
const Days = {
  "1": "Monday",
  "2": "Tuesday",
  "3": "Wednesday",
  "4": "Thursday",
  "5": "Friday",
  "6": "Saturday",
  "7": "Sunday",
};