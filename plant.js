const numOfComplete = document.getElementById("completeNum");
const numOfTotal = document.getElementById("totalNum");
const progress = document.querySelector(".progress");
const plantImg = document.getElementsByTagName("img")[0];
const flowers = [
  "https://images.unsplash.com/photo-1495231916356-a86217efff12?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1474112704314-8162b7749a90?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGZsb3dlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1487139975590-b4f1dce9b035?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  "https://images.unsplash.com/photo-1596808119772-d3ad38f5d8b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
];
const displayCnt = () => {
  numOfComplete.innerText = dones.length;
  numOfTotal.innerText = dones.length + todos.length;
  if (todos.length + dones.length !== 0) {
    const len = Math.round(
      (dones.length / (dones.length + todos.length)) * 100
    );
    console.log(len);
    if (len < 30) {
      plantImg.src = "./images/one.png";
    } else if (len < 60) {
      plantImg.src = "./images/two.png";
    } else if (len < 90) {
      plantImg.src = "./images/four.png";
    } else {
      plantImg.src = flowers[Math.floor(Math.random() * flowers.length)];
    }
    progress.innerText = `${len}%`;
    progress.style.width = `${len}%`;
  }
};

document.addEventListener("DOMContentLoaded", displayCnt);
