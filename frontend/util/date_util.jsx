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

export const years = [
  2018
].map( year => {
  return (
    <option key={year} value={year}>{year}</option>
    );
  }
);

export const days = [
  1, 2,	3, 4,	5,	6,	7,	8,	9,
  10,	11,	12,	13,	14,	15,	16,	17,	18,	19,
  20,	21,	22,	23,	24,	25,	26,	27,	28,	29,
  30,	31
].map( day => {
  return (
    <option key={day} value={day}>{day}</option>
    );
  }
);


export const monthsList = [
  <option key={1} value={1}>Jan</option>,
  <option key={2} value={2}>Feb</option>,
  <option key={3} value={3}>Mar</option>,
  <option key={4} value={4}>Apr</option>,
  <option key={5} value={5}>May</option>,
  <option key={6} value={6}>June</option>,
  <option key={7} value={7}>July</option>,
  <option key={8} value={8}>Aug</option>,
  <option key={9} value={9}>Sept</option>,
  <option key={10} value={10}>Oct</option>,
  <option key={11} value={11}>Nov</option>,
  <option key={12} value={12}>Dec</option>
];
