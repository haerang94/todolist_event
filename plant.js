const numOfComplete = document.getElementById("completeNum");
const numOfTotal = document.getElementById("totalNum");
const progress = document.querySelector(".progress");
document.addEventListener("DOMContentLoaded", () => {
  numOfComplete.innerText = dones.length;
  numOfTotal.innerText = dones.length + todos.length;
  const len = (dones.length / (dones.length + todos.length)) * 100;
  progress.innerText = `${len}%`;
  progress.style.width = `${len}%`;
});
