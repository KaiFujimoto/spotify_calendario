export const monthGenerator = (month, year) => {
  let constantMonth = month;
  let datesArray = [];
  let day = 1;
  let date = new Date(`${month}, ${day}, ${year}`);
  while (!(!(date.valueOf()))) {
    let dayOfTheWeek = weekDays[date.getDay()];
    let theMonth = months[date.getMonth()];
    let theDay = day;
    let theYear = year;
    if (theMonth === constantMonth) {
      datesArray.push({
        day: {
          dayOfTheWeek,
          theMonth,
          month: date.getMonth() + 1,
          theDay,
          theYear
        }
      });
    }
    day += 1;
    date = new Date(`${month}, ${day}, ${year}`);
  }
  return datesArray;
};

export const weekDays = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
};

export const months = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};

import React from 'react';

export const timeOfDay = [
  "am", "pm"
].map( year => {
  return (
    <option key={year} value={year}>{year}</option>
    );
  }
);

export const minutes = [
  "00", "15", "30", "45"
].map( day => {
  return (
    <option key={day} value={day}>{day}</option>
    );
  }
);


export const hours = [
  <option key={1} value={1}>"01"</option>,
  <option key={2} value={2}>"02"</option>,
  <option key={3} value={3}>"03"</option>,
  <option key={4} value={4}>"04"</option>,
  <option key={5} value={5}>"05"</option>,
  <option key={6} value={6}>"06"</option>,
  <option key={7} value={7}>"07"</option>,
  <option key={8} value={8}>"08"</option>,
  <option key={9} value={9}>"09"</option>,
  <option key={10} value={10}>"10"</option>,
  <option key={11} value={11}>"11"</option>,
  <option key={12} value={12}>"12"</option>
];

export const timeGenerator = (string) => {
  switch (string.slice(0,2)) {
    case "0:":
      return `12:${string.slice(2, string.length)}` + ' ' + 'a.m';
    case "13":
      return `01${string.slice(2, string.length)}` + ' ' + 'p.m.';
    case "14":
      return `02${string.slice(2, string.length)}`+ ' ' + 'p.m.';
    case "15":
      return `03${string.slice(2, string.length)}`+ ' ' + 'p.m.';
    case "16":
      return `04${string.slice(2, string.length)}`+ ' ' + 'p.m.';
    case "17":
      return `05${string.slice(2, string.length)}`+ ' ' + 'p.m.';
    case "18":
      return `06${string.slice(2, string.length)}`+ ' ' + 'p.m.';
    case "19":
      return `07${string.slice(2, string.length)}`+ ' ' + 'p.m.';
    case "20":
      return `08${string.slice(2, string.length)}`+ ' ' + 'p.m.';
    case "21":
      return `09${string.slice(2, string.length)}`+ ' ' + 'p.m.';
    case "22":
      return `10${string.slice(2, string.length)}`+ ' ' + 'p.m.';
    case "23":
      return `11${string.slice(2, string.length)}`+ ' ' + 'p.m.';
    default:
      return string + 'a.m.';
  }
};
