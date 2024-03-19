const getUnixFromNormal = (time) => {
  let dateString = new Date(time);
  return dateString.getTime() / 1000;
};

const getNormalFromUnix = (time) => {
  let milliseconds = unixTimestamp * 1000;
  let date = new Date(milliseconds);
  return date;
};

console.log(
  "time asleep: ",
  getUnixFromNormal("Monday, March 18, 2024 11:40 PM")
);
console.log(
  " time awake: ",
  getUnixFromNormal("Tuesday, March 18, 2024 8:20 AM")
);

export { getUnixFromNormal, getNormalFromUnix };
