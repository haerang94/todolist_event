const closeModalBtn = document.querySelector(".close-modal-btn");
const modal = document.querySelector(".modal");
const closeIcon = document.querySelector(".fa-times-circle");

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

closeIcon.addEventListener("click", () => {
  modal.classList.add("hidden");
});
