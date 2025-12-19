const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

const saved = localStorage.getItem("todos");
const todos = saved ? JSON.parse(saved) : [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodoNode(todo, index) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;

  const textSpan = document.createElement("span");
  textSpan.textContent = todo.text;
  textSpan.style.textDecoration = todo.completed
    ? "line-through"
    : "none";

  // Prevent multiple prompt windows
  let isEditing = false;
  textSpan.addEventListener("dblclick", () => {
    if (isEditing) return;

    isEditing = true;
    const newText = prompt("Edit todo", todo.text);

    if (newText && newText.trim()) {
      todo.text = newText.trim();
      textSpan.textContent = todo.text;
      saveTodos();
    }

    isEditing = false;
  });

  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;
    textSpan.style.textDecoration = checkbox.checked
      ? "line-through"
      : "none";
    saveTodos();
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    todos.splice(index, 1);
    render();
    saveTodos();
  });

  li.appendChild(checkbox);
  li.appendChild(textSpan);
  li.appendChild(delBtn);

  return li;
}

function render() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    list.appendChild(createTodoNode(todo, index));
  });
}

function addTodo() {
  const text = input.value.trim();
  if (!text) return;

  todos.push({ text, completed: false });
  input.value = "";
  render();
  saveTodos();
}

// Event listeners
addBtn.addEventListener("click", addTodo);

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

// Initial render
render();
