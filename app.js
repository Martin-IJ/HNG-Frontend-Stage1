const currentDay = document.getElementById("currentDayOfTheWeek");

const date = new Date();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const weekDays = daysOfWeek[date.getDay()];
currentDay.innerHTML = weekDays;

const UTC_Time = document.getElementById("currentUTCTime");
const currentUTCTime = new Date().getTime();

UTC_Time.innerHTML = `${new Date(
  currentUTCTime
).toLocaleString()} ${currentUTCTime}`;
