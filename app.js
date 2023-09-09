const currentDay = document.getElementById("currentDay");

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

const UTC_Time = document.getElementById("currentTime");
const currentTime = new Date().getTime();

UTC_Time.innerHTML = `${new Date(
  currentTime
).toLocaleString()} ${currentTime}`;
