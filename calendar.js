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
};
