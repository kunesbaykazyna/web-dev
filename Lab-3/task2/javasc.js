const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

const totalTasks = document.getElementById('total-tasks');
const completedTasks = document.getElementById('completed-tasks');

function updateStats() {
    const allTasks = document.querySelectorAll('.todo-item');
    const doneTasks = document.querySelectorAll('.todo-item.completed');

    totalTasks.textContent = `Total: ${allTasks.length}`;
    completedTasks.textContent = `Completed: ${doneTasks.length}`;
}

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
        updateStats();
    });

    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(li);
        updateStats();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    todoInput.value = '';
    todoInput.focus();

    updateStats();
}

addBtn.addEventListener('click', addTask);

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
