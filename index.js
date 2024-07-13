const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const newTask = document.getElementById('newTask');

addButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const listItem = document.createElement('li');

        listItem.textContent = taskText;

        listItem.addEventListener('click', function() {
            newTask.removeChild(listItem);
        });

        newTask.appendChild(listItem);

        taskInput.value = '';

    } else {
        alert('Please enter a task.');
    }
});



