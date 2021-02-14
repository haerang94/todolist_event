let yearContent = document.getElementById("year");
const monthContent = document.querySelector(".select");
const dropDown = document.getElementById("month");
const leftBtn = document.querySelector(".fa-chevron-left");
const rightBtn = document.querySelector(".fa-chevron-right");
const date = document.getElementById("date");
// 오늘 날짜 yyyy,mm,dd
const today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
yearContent.textContent = yyyy;
monthContent.textContent = `${mm}월`;
// 이동하는 날짜 year, month, day
let year = yyyy;
let month = mm;
let day;
let todolistDate = `${yyyy}-${mm}-${dd}`;
// console.log(todolistDate);
const leap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const plain = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//  윤년인지 체크
const isLeapYear = (year) => {
  // 윤년인 경우 true, 평년인 경우 false
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
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

const insertDays = () => {
  let firstDay = untilLastMonth(year, month) % 7;
  let last = lastDay(year, month);
  let template = "";
  for (let i = 0; i <= firstDay; i++) {
    template += `<div class="day"></div>`;
  }

  for (let i = 1; i <= last; i++) {
    if (i === dd && month == mm && year == yyyy) {
      template += `<div class="day today">${i}</div>`;
    } else {
      template += `<div class="day">${i}</div>`;
    }
  }
  date.innerHTML = template;
};

insertDays();

dropDown.addEventListener("click", (e) => {
  if (e.target.classList.contains("dropdown-list__item")) {
    const newMonth = e.target.textContent;
    month = +newMonth.substring(0, newMonth.length - 1);
    monthContent.textContent = `${newMonth}`;
    insertDays();
  }
});

leftBtn.addEventListener("click", (e) => {
  yearContent.textContent = year - 1;
  year -= 1;
  insertDays();
});
rightBtn.addEventListener("click", (e) => {
  yearContent.textContent = year + 1;
  year += 1;
  insertDays();
});

date.addEventListener("click", (e) => {
  if (e.target.classList.contains("day")) {
    day = +e.target.textContent;
    console.log(year, month, day);
    todolistDate = `${year}-${month}-${day}`;
    console.log(todolistDate);
  }
});
