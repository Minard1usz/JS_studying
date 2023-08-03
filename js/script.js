function findDates(str) {
    const regExp = /\b(\d{4})-(\d{2})-(\d{2})\b/g;
    const findMatches = str.matchAll(regExp);
    const result = [];

    for (const match of findMatches) {
      const year = parseInt(match[1], 10);
      const month = parseInt(match[2], 10);
      const day = parseInt(match[3], 10);

      if (isDateValid(year, month, day)) {
        const monthName = getMonthName(month);
        result.push({day, month, monthName, year});
      }

    }
    return result;
}

function isDateValid(year, month, day) {
  const date = new Date(year, month - 1, day);
  if (day < 0 || day > 31) {
    return console.log(`There are no so many days in ${getMonthName(month)}`);
  }
  return (
    date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === day
  );
}


function getMonthName(month) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  return monthNames[month - 1];
}

const str = "The dates between 1976-03-12, 1983-10-14, 2023-08-03, 2023-11-32";
const datesArray = findDates(str);
console.log(datesArray);



