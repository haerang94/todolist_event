const numOfComplete = document.getElementById("completeNum");
const numOfTotal = document.getElementById("totalNum");
const progress = document.querySelector(".progress");

const displayCnt = () => {
  numOfComplete.innerText = dones.length;
  numOfTotal.innerText = dones.length + todos.length;
  if (todos.length + dones.length !== 0) {
    const len = (dones.length / (dones.length + todos.length)) * 100;
    progress.innerText = `${len}%`;
    progress.style.width = `${len}%`;
  }
};

document.addEventListener("DOMContentLoaded", displayCnt);
