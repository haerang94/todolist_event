const addTodoIcon = document.getElementById("add-todo");
const addDoneIcon = document.getElementById("add-done");
const inputContent = document.getElementById("todo-textarea");
const todoList = document.getElementById("todolist");
const doneList = document.getElementById("donelist");

const background = ["#f1f6f9"];
const label = ["#14274e"];
// 투두리스트 추가
const addTodo = () => {
  if (inputContent.value === "") {
    alert("write a task");
    return;
  }
  const wrapper = document.createElement("div");
  wrapper.className = "todo-flexbox";
  const newTodo = document.createElement("div");
  newTodo.className = "todo-item";
  newTodo.appendChild(document.createTextNode(inputContent.value));
  wrapper.appendChild(newTodo);
  const link = document.createElement("a");
  link.className = "delete-todo";
  link.innerHTML = `<i class="far fa-trash-alt"></i>`;
  wrapper.appendChild(link);
  todolist.appendChild(wrapper);
  inputContent.value = "";
};

// 투두리스트 삭제
const removeTodo = (e) => {
  if (e.target.parentElement.classList.contains("delete-todo")) {
    e.target.parentElement.parentElement.remove();
  }
};
// 투두리스트 입력
addTodoIcon.addEventListener("click", (e) => {
  modal.classList.remove("hidden");
});

// 투두리스트 추가
closeModalBtn.addEventListener("click", () => {
  addTodo();
});
//  투두리스트 삭제 이벤트
todolist.addEventListener("click", (e) => {
  removeTodo(e);
});
