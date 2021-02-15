const numOfComplete = document.getElementById("completeNum");
const numOfTotal = document.getElementById("totalNum");
const progress = document.querySelector(".progress");
const plantImg = document.getElementsByTagName("img")[0];

const displayCnt = () => {
  numOfComplete.innerText = dones.length;
  numOfTotal.innerText = dones.length + todos.length;
  if (todos.length + dones.length !== 0) {
    const len = Math.round(
      (dones.length / (dones.length + todos.length)) * 100
    );
    console.log(plantImg);
    if (len < 30) {
      plantImg.src = "./images/one.png";
    } else if (len < 60) {
      plantImg.src = "./images/two.png";
    } else if (len < 90) {
      plantImg.src = "./images/four.png";
    } else {
        
    }
    progress.innerText = `${len}%`;
    progress.style.width = `${len}%`;
  }
};

document.addEventListener("DOMContentLoaded", displayCnt);
