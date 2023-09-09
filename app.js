const day = document.getElementById("currentDay");
const UTC_time = document.getElementById("currentTime");

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

const dayOfWeek = daysOfWeek[date.getDay()];

day.innerHTML = dayOfWeek;

const currentUTCMilliseconds = new Date().getTime();
UTC_time.innerHTML = `${new Date(
  currentUTCMilliseconds
).toLocaleString()}  ${currentUTCMilliseconds}`;
