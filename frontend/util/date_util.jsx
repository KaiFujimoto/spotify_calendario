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
