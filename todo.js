const addTodoIcon = document.getElementById("add-todo");
const addDoneIcon = document.getElementById("add-done");
const inputContent = document.getElementById("todo-textarea");
const todoList = document.getElementById("todolist");
const doneList = document.getElementById("donelist");
const deleteAllTodosBtn = document.querySelector(".delete-all-todos-btn");
const deleteAllDonesBtn = document.querySelector(".delete-all-dones-btn");
const todoSearch = document.querySelector(".todo-search");
const doneSearch = document.querySelector(".done-search");
const todoSearchBtn = document.getElementById("todo-search-btn");
const doneSearchBtn = document.getElementById("done-search-btn");
let isTodo = false;
let isDone = false;
let todos;
let dones;
const background = ["#f1f6f9"];
const label = ["#14274e"];

// 투두리스트 저장
const storeTodo = (todo) => {
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};
const storeDone = (done) => {
  dones.push(done);
  localStorage.setItem("dones", JSON.stringify(dones));
};
// ls에서 삭제
const removeTodoFromLS = (deleteItem) => {
  // todo:수정 필요. 같은 투두리스트의 경우 둘다 지워짐
  todos.forEach((todo, idx) => {
    if (deleteItem.textContent === todo) {
      todos.splice(idx, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
};
const removeDoneFromLS = (deleteItem) => {
  // todo:수정 필요. 같은 투두리스트의 경우 둘다 지워짐
  dones.forEach((done, idx) => {
    if (deleteItem.textContent === done) {
      dones.splice(idx, 1);
    }
  });
  localStorage.setItem("dones", JSON.stringify(dones));
};
// 재사용성 위해: todo or inputContent.value
const makeTodolist = (todo = inputContent.value) => {
  const wrapper = document.createElement("div");
  wrapper.className = "todo-flexbox";
  const newTodo = document.createElement("div");
  newTodo.className = "todo-item";
  newTodo.appendChild(document.createTextNode(todo));
  wrapper.appendChild(newTodo);
  const link = document.createElement("a");
  link.className = "delete-todo";
  link.innerHTML = `<i class="far fa-trash-alt"></i>`;
  wrapper.appendChild(link);
  todoList.appendChild(wrapper);
};

const makeDonelist = (done = inputContent.value) => {
  const wrapper = document.createElement("div");
  wrapper.className = "done-flexbox";
  const newTodo = document.createElement("div");
  newTodo.className = "done-item";
  newTodo.appendChild(document.createTextNode(done));
  wrapper.appendChild(newTodo);
  const link = document.createElement("a");
  link.className = "delete-done";
  link.innerHTML = `<i class="far fa-trash-alt"></i>`;
  wrapper.appendChild(link);
  doneList.appendChild(wrapper);
};

// 투두리스트 추가
const addTodo = () => {
  if (inputContent.value === "") {
    alert("write a task");
    return;
  }
  makeTodolist();
  storeTodo(inputContent.value);
  inputContent.value = "";
};
// 완료 목록 추가
const addDone = () => {
  if (inputContent.value === "") {
    alert("write a task");
    return;
  }
  makeDonelist();
  storeDone(inputContent.value);
  inputContent.value = "";
};

// 투두리스트 삭제
const removeTodo = (e) => {
  if (e.target.parentElement.classList.contains("delete-todo")) {
    e.target.parentElement.parentElement.remove();
    removeTodoFromLS(e.target.parentElement.parentElement);
  }
};
// 완료 리스트 삭제
const removeDone = (e) => {
  if (e.target.parentElement.classList.contains("delete-done")) {
    e.target.parentElement.parentElement.remove();
    removeDoneFromLS(e.target.parentElement.parentElement);
  }
};
// 투두리스트 전체 삭제
const removeAllTodos = () => {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  todos = [];
  localStorage.setItem("todos", JSON.stringify(todos));
};
// 완료 리스트 전체 삭제
const removeAllDones = () => {
  while (doneList.firstChild) {
    doneList.removeChild(doneList.firstChild);
  }
  dones = [];
  localStorage.setItem("dones", JSON.stringify(dones));
};

// 검색 필터링 함수
const filterTodos = (e) => {
  if (e !== undefined && e.keyCode === 13) return;
  const text = todoSearch.value.toLowerCase();
  document.querySelectorAll(".todo-item").forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.parentElement.style.display = "flex";
    } else {
      task.parentElement.style.display = "none";
    }
  });
};
const filterDones = (e) => {
  if (e !== undefined && e.keyCode === 13) return;
  const text = doneSearch.value.toLowerCase();
  document.querySelectorAll(".done-item").forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.parentElement.style.display = "flex";
    } else {
      task.parentElement.style.display = "none";
    }
  });
};
// 검색 버튼 눌렀을 때 (검색창 리셋)
const resetTodoSearch = (e) => {
  e.preventDefault();
  todoSearch.value = "";
  filterTodos();
};
const resetDoneSearch = (e) => {
  e.preventDefault();
  doneSearch.value = "";
  filterDones();
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

const getTasks = () => {
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  if (localStorage.getItem("dones") === null) {
    dones = [];
  } else {
    dones = JSON.parse(localStorage.getItem("dones"));
  }
  todos.forEach((todo) => {
    makeTodolist(todo);
  });
  dones.forEach((done) => {
    makeDonelist(done);
  });
};

// 전체 이벤트 리스너 가져오기

const loadEventListeners = () => {
  // DOM load event
  document.addEventListener("DOMContentLoaded", getTasks);

  //  투두리스트 삭제 이벤트
  todoList.addEventListener("click", removeTodo);
  // 완료 리스트 삭제 이벤트
  doneList.addEventListener("click", removeDone);
  // 전체 투두리스트 삭제
  deleteAllTodosBtn.addEventListener("click", removeAllTodos);
  // 전체 완료리스트 삭제
  deleteAllDonesBtn.addEventListener("click", removeAllDones);

  // 검색 필터링 기능
  todoSearch.addEventListener("keyup", filterTodos);

  doneSearch.addEventListener("keyup", filterDones);

  // 검색버튼 눌렀을 때
  todoSearchBtn.addEventListener("click", resetTodoSearch);
  doneSearchBtn.addEventListener("click", resetDoneSearch);
};

loadEventListeners();
