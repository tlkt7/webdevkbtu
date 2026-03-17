'use strict';

const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');

function createTodoItem(text) {
  const li = document.createElement('li');
  li.classList.add('todo-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('todo-item__checkbox');

  const label = document.createElement('label');
  label.classList.add('todo-item__label');
  label.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.classList.add('todo-item__delete');
  deleteBtn.setAttribute('aria-label', 'Delete task');
  deleteBtn.textContent = '✕';

  checkbox.addEventListener('change', () => {
    li.classList.toggle('todo-item--done', checkbox.checked);
  });

  label.addEventListener('click', () => {
    checkbox.checked = !checkbox.checked;
    checkbox.dispatchEvent(new Event('change'));
  });

  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteBtn);

  return li;
}

function addTask() {
  const text = taskInput.value.trim();

  if (!text) {
    taskInput.focus();
    return;
  }

  const item = createTodoItem(text);
  todoList.appendChild(item);
  taskInput.value = '';
  taskInput.focus();
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addTask();
});
