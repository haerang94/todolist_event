let yearContent = document.getElementById("year");
const monthContent = document.querySelector(".select");
const dropDown = document.getElementById("month");
const date = document.getElementById("date");

const today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
yearContent.textContent = yyyy;
monthContent.textContent = `${mm}월`;
let year = yyyy;
let month = mm;
console.log(dd);

const leap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const plain = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//  윤년인지 체크
const isLeapYear = () => {
  // 윤년인 경우 true, 평년인 경우 false
  if (year % 400 == 0) {
    return true;
  } else if (year % 100) {
    return false;
  } else if (year % 4) {
    return true;
  }
  return false;
};

const untilLastYear = (year) => {
  let tot = 0;
  for (let i = 1; i < year; i++) {
    if (isLeapYear(i)) tot += 366;
    else tot += 365;
  }
  return tot;
};

const untilLastMonth = (year, month) => {
  let tot = untilLastYear(year);
  for (let i = 1; i < month; i++) {
    if (isLeapYear(year)) tot += leap[i - 1];
    else tot += plain[i - 1];
  }
  return tot;
};

const untilYesterday = (year, month, day) => {
  let tot = untilLastMonth(year, month);
  return tot + day;
};

const lastDay = (year, month) => {
  let day = 0;
  if (isLeapYear(year)) {
    day = leap[month - 1];
  } else {
    day = plain[month - 1];
  }
  return day;
};
console.log(
  yearContent.textContent,
  monthContent.textContent.substring(0, monthContent.textContent.length - 1)
);

const insertDays = () => {
  let firstDay = untilLastMonth(year, month) % 7;
  let last = lastDay(year, month);
  let template = "";
  console.log(untilLastMonth(year, month), firstDay);
  for (let i = 0; i <= firstDay; i++) {
    template += `<div class="day"></div>`;
  }

  for (let i = 1; i <= last; i++) {
    if (i === dd) {
      template += `<div class="day today">${i}</div>`;
    } else {
      template += `<div class="day">${i}</div>`;
    }
  }
  console.log(date, template);
  date.innerHTML = template;
};

insertDays();
