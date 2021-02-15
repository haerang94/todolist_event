const proverb = document.getElementById("proverb");

const proverbList = [
  "지나간 일은 잊어버리세요.",
  "인생은 모험이거나 아무것도 아니다.",
  "조금씩 조금씩이 큰 일을 한다.",
  "오늘 걷지 않으면 내일은 뛰어야 한다.",
  "서투른 목수가 연장 탓을 한다.",
  "시작은 전체의 반이다.",
  "바람이 불지 않으면 노를 저어라",
  "지나간 슬픔에 새 눈물을 낭비하지 말라.",
  "약한 것도 합치면 강해진다.",
  "모든 성과는 요령을 피우지 않을 때 생긴다",
  "성공은 주로 성공을 찾느라 바쁜 사람들에게 찾아온다",
  "무언가를 시작하려면 말은 멈추고 행동해야 한다.",
  "성공적인 사람들은 계속해서 움직인다.",
  "노력 전에 성공이 나오는 곳은 사전뿐이다.",
];

document.addEventListener("DOMContentLoaded", () => {
  proverb.innerText = "행복은 스스로 찾는 것이다.";
  setInterval(() => {
    proverb.classList.add("appear");
    setTimeout(() => {
      proverb.classList.remove("disappear");
    }, 1001);
    let num = Math.floor(Math.random() * proverbList.length);

    proverb.classList.add("disappear");
    setTimeout(() => {
      proverb.classList.remove("appear");
      proverb.innerText = proverbList[num];
    }, 1001);
  }, 4000);
});
