const addTodoIcon = document.getElementById("add-todo");
const addDoneIcon = document.getElementById("add-done");
const inputContent = document.getElementById("todo-textarea");
const todoList = document.getElementById("todolist");
const doneList = document.getElementById("donelist");
const deleteAllTodosBtn = document.querySelector(".delete-all-todos-btn");
const deleteAllDonesBtn = document.querySelector(".delete-all-dones-btn");
let isTodo = false;
let isDone = false;

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
  todoList.appendChild(wrapper);
  inputContent.value = "";
};
// 완료 목록 추가
const addDone = () => {
  if (inputContent.value === "") {
    alert("write a task");
    return;
  }
  const wrapper = document.createElement("div");
  wrapper.className = "done-flexbox";
  const newTodo = document.createElement("div");
  newTodo.className = "done-item";
  newTodo.appendChild(document.createTextNode(inputContent.value));
  wrapper.appendChild(newTodo);
  const link = document.createElement("a");
  link.className = "delete-done";
  link.innerHTML = `<i class="far fa-trash-alt"></i>`;
  wrapper.appendChild(link);
  doneList.appendChild(wrapper);
  inputContent.value = "";
};

// 투두리스트 삭제
const removeTodo = (e) => {
  if (e.target.parentElement.classList.contains("delete-todo")) {
    e.target.parentElement.parentElement.remove();
  }
};
// 완료 리스트 삭제
const removeDone = (e) => {
  if (e.target.parentElement.classList.contains("delete-done")) {
    e.target.parentElement.parentElement.remove();
  }
};
// 투두리스트 전체 삭제
const removeAllTodos = () => {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
};
// 완료 리스트 전체 삭제
const removeAllDones = () => {
  while (doneList.firstChild) {
    doneList.removeChild(doneList.firstChild);
  }
};

// 투두리스트 입력
addTodoIcon.addEventListener("click", (e) => {
  modal.classList.remove("hidden");
  isTodo = true;
});
// 완료리스트 입력
addDoneIcon.addEventListener("click", (e) => {
  modal.classList.remove("hidden");
  isDone = true;
});

// 투두리스트 추가, 완료 리스트 추가
closeModalBtn.addEventListener("click", () => {
  if (isTodo) {
    addTodo();
    isTodo = false;
  } else if (isDone) {
    addDone();
    isDone = false;
  }
});

//  투두리스트 삭제 이벤트
todoList.addEventListener("click", removeTodo);
// 완료 리스트 삭제 이벤트
doneList.addEventListener("click", removeDone);
// 전체 투두리스트 삭제
deleteAllTodosBtn.addEventListener("click", removeAllTodos);
// 전체 완료리스트 삭제
deleteAllDonesBtn.addEventListener("click", removeAllDones);
