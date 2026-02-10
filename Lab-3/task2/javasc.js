const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTask() {
    const text = todoInput.value.trim();
    if (text === "") return;

    const li = document.createElement('li');
    li.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'status-checkbox';

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '🗑';

    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = '';
    todoInput.focus();
}

addBtn.addEventListener('click', addTask);

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
