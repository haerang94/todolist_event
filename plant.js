const numOfComplete = document.getElementById("completeNum");
const numOfTotal = document.getElementById("totalNum");
const progress = document.querySelector(".progress");
const plantImg = document.getElementsByTagName("img")[0];
const comment = document.getElementById("comment");
const flowers = [
  "https://images.unsplash.com/photo-1495231916356-a86217efff12?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1474112704314-8162b7749a90?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGZsb3dlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1487139975590-b4f1dce9b035?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1596808119772-d3ad38f5d8b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
  "https://images.unsplash.com/photo-1567538737566-184fdf777891?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODF8fGZsb3dlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1602931703142-3d6316a74d5c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTU1fHxmbG93ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1593600312294-e0652c60a26b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80",
  "https://images.unsplash.com/photo-1556647944-11bc0d4e0c4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
  "https://images.unsplash.com/photo-1491246176266-6bf18143d71d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
];
const displayCnt = () => {
  comment.innerText = "싹이 텄어요. 시작이 반입니다.";
  numOfComplete.innerText = dones.length;
  numOfTotal.innerText = dones.length + todos.length;
  if (todos.length + dones.length !== 0) {
    const len = Math.round(
      (dones.length / (dones.length + todos.length)) * 100
    );
    if (len < 30) {
      plantImg.src = "./images/one.png";
      comment.innerText = "싹이 텄어요. 시작이 반입니다.";
    } else if (len < 60) {
      plantImg.src = "./images/two.png";
      comment.innerText = "줄기가 자랐네요. 같이 성장하고 있어요.";
    } else if (len < 90) {
      plantImg.src = "./images/four.png";
      comment.innerText = "잎이 많아졌어요.\n열심히 하는 당신이 멋있습니다.";
    } else {
      plantImg.src = flowers[Math.floor(Math.random() * flowers.length)];
      comment.innerText =
        "당신이 노력이 결실을 맺어\n 꽃이 피어났습니다. 수고하셨습니다.";
    }
    progress.innerText = `${len}%`;
    progress.style.width = `${len}%`;
  } else {
    progress.innerText = `0%`;
    progress.style.width = `0%`;
  }
};

document.addEventListener("DOMContentLoaded", displayCnt);
