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
