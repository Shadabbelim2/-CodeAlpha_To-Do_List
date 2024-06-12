document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete');
            taskItem.appendChild(deleteButton);

            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

    function handleTaskClick(e) {
        if (e.target.classList.contains('delete')) {
            const taskItem = e.target.parentElement;
            taskList.removeChild(taskItem);
        } else {
            e.target.classList.toggle('completed');
        }
    }
});