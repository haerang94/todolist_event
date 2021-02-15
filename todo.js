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
let currentDate;
const background = ["#f1f6f9"];
const label = ["#14274e"];

// 투두리스트 저장
const storeTodo = (todo) => {
  console.log("저장", todolistDate);
  todos.push(todo);
  currentDate["todos"] = todos;
  localStorage.setItem(todolistDate, JSON.stringify(currentDate));
  // localStorage.setItem("todos", JSON.stringify(todos));
};
const storeDone = (done) => {
  dones.push(done);
  currentDate["dones"] = dones;
  localStorage.setItem(todolistDate, JSON.stringify(currentDate));
  // localStorage.setItem("dones", JSON.stringify(dones));
};
// ls에서 삭제
const removeTodoFromLS = (deleteItem) => {
  // todo:수정 필요. 같은 투두리스트의 경우 둘다 지워짐

  const text = deleteItem.textContent;
  todos.forEach((todo, idx) => {
    if (text.substring(0, text.length - 4) === todo) {
      todos.splice(idx, 1);
    }
  });
  currentDate["todos"] = todos;
  localStorage.setItem(todolistDate, JSON.stringify(currentDate));
};
const removeDoneFromLS = (deleteItem) => {
  // todo:수정 필요. 같은 투두리스트의 경우 둘다 지워짐
  const text = deleteItem.textContent;
  dones.forEach((done, idx) => {
    if (text.substring(0, text.length - 5) === done) {
      dones.splice(idx, 1);
    }
  });
  currentDate["dones"] = dones;
  localStorage.setItem(todolistDate, JSON.stringify(currentDate));
};
// 재사용성 위해: todo or inputContent.value
const makeTodolist = (todo = inputContent.value) => {
  const wrapper = document.createElement("div");
  wrapper.className = "todo-flexbox";
  const newTodo = document.createElement("div");
  newTodo.className = "todo-item";
  newTodo.appendChild(document.createTextNode(todo));
  wrapper.appendChild(newTodo);
  const iconBox = document.createElement("div");
  iconBox.className = "icon-box";
  wrapper.appendChild(iconBox);
  const finish = document.createElement("button");
  finish.className = "finish";
  finish.textContent = `완료`;
  iconBox.appendChild(finish);
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-todo";
  deleteBtn.textContent = "삭제";
  iconBox.appendChild(deleteBtn);
  todoList.appendChild(wrapper);
};

const makeDonelist = (done = inputContent.value) => {
  const wrapper = document.createElement("div");
  wrapper.className = "done-flexbox";
  const newTodo = document.createElement("div");
  newTodo.className = "done-item";
  newTodo.appendChild(document.createTextNode(done));
  wrapper.appendChild(newTodo);
  const iconBox = document.createElement("div");
  iconBox.className = "icon-box";
  wrapper.appendChild(iconBox);
  const notFinish = document.createElement("button");
  notFinish.className = "not-finish";
  notFinish.textContent = `미완료`;
  iconBox.appendChild(notFinish);
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-done";
  deleteBtn.textContent = "삭제";
  iconBox.appendChild(deleteBtn);
  doneList.appendChild(wrapper);
};

// 투두리스트 추가
// input값이 없을 때는 todolit추가할 때
// 있을 때는 미완료에서 완료로 이동할 때
const addTodo = (todo = inputContent.value) => {
  if (todo === undefined && inputContent.value === "") {
    alert("write a task");
    return;
  }
  makeTodolist(todo);
  storeTodo(todo);
  inputContent.value = "";
};
// 완료 목록 추가
const addDone = (done = inputContent.value) => {
  if (done === undefined && inputContent.value === "") {
    alert("write a task");
    return;
  }
  makeDonelist(done);
  storeDone(done);
  inputContent.value = "";
};

// 투두리스트 삭제
const removeTodo = (e) => {
  if (e.target.classList.contains("delete-todo")) {
    e.target.parentElement.parentElement.remove();
    removeTodoFromLS(e.target.parentElement.parentElement);
  }
};
// 완료 리스트 삭제
const removeDone = (e) => {
  if (e.target.classList.contains("delete-done")) {
    e.target.parentElement.parentElement.remove();
    removeDoneFromLS(e.target.parentElement.parentElement);
  }
};
// 투두리스트 완료
const finishTodo = (e) => {
  if (e.target.classList.contains("finish")) {
    const text = e.target.parentElement.parentElement.textContent;
    addDone(text.substring(0, text.length - 4));
    storeDone(text.substring(0, text.length - 4));
    removeTodoFromLS(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
  }
};
const finishDone = (e) => {
  if (e.target.classList.contains("not-finish")) {
    const text = e.target.parentElement.parentElement.textContent;
    addTodo(text.substring(0, text.length - 5));
    storeTodo(text.substring(0, text.length - 5));
    removeDoneFromLS(e.target.parentElement.parentElement);
    e.target.parentElement.parentElement.remove();
  }
};
// 투두리스트 전체 삭제
const removeAllTodos = () => {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  todos = [];
  currentDate["todos"] = todos;
  localStorage.setItem(todolistDate, JSON.stringify(currentDate));
};
// 완료 리스트 전체 삭제
const removeAllDones = () => {
  while (doneList.firstChild) {
    doneList.removeChild(doneList.firstChild);
  }
  dones = [];
  currentDate["dones"] = dones;
  localStorage.setItem(todolistDate, JSON.stringify(currentDate));
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
  console.log(todolistDate);
  todoList.innerHTML = "";
  doneList.innerHTML = "";
  if (localStorage.getItem(todolistDate) === null) {
    currentDate = {};
  } else {
    currentDate = JSON.parse(localStorage.getItem(todolistDate));
  }
  if (currentDate["todos"] === undefined) {
    todos = [];
  } else {
    todos = currentDate["todos"];
  }
  if (currentDate["dones"] === undefined) {
    dones = [];
  } else {
    dones = currentDate["dones"];
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
  // 투두리스트 완료 이벤트
  todoList.addEventListener("click", finishTodo);
  // 완료 리스트 미완료 이벤트
  doneList.addEventListener("click", finishDone);
  // 검색 필터링 기능
  todoSearch.addEventListener("keyup", filterTodos);

  doneSearch.addEventListener("keyup", filterDones);

  // 검색버튼 눌렀을 때
  todoSearchBtn.addEventListener("click", resetTodoSearch);
  doneSearchBtn.addEventListener("click", resetDoneSearch);
  // 완료 버튼 클릭
};

loadEventListeners();
