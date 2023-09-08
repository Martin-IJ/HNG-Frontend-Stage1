const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDay = daysOfWeek[new Date().getDay()];
document.getElementById("currentDayOfTheWeek").textContent = `${currentDay}`;

const currentUTCTime = new Date().getTime();
document.getElementById("currentUTCTime").textContent = `${currentUTCTime} ms`;
