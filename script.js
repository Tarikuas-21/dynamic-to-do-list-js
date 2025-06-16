// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize tasks array
    let tasks = [];

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks); // Parse JSON string to array
            tasks.forEach(taskText => {
                createTaskElement(taskText); // Create DOM element for each task
            });
        }
    }

    // Function to create a task element
    function createTaskElement(taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add click event to remove the task
        removeButton.onclick = function() {
            removeTask(taskText, listItem); // Call removeTask function
        };

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        if (taskText === "") {
            alert("Please enter a task."); // Alert if input is empty
            return;
        }

        createTaskElement(taskText); // Create DOM element for the new task

        tasks.push(taskText); // Add new task to the tasks array
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks to Local Storage

        taskInput.value = ''; // Clear the input field
    }

    // Function to remove a task
    function removeTask(taskText, listItem) {
        tasks = tasks.filter(task => task !== taskText); // Remove task from array
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Update Local Storage
        taskList.removeChild(listItem); // Remove the list item from the DOM
    }

    // Add event listener to the button
    addButton.addEventListener('click', addTask);

    // Allow adding tasks with the Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks when the page is loaded
    loadTasks();
});
