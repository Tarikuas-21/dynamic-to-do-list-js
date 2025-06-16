// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        if (taskText === "") {
            alert("Please enter a task."); // Alert if input is empty
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add click event to remove the task
        removeButton.onclick = function() {
            taskList.removeChild(listItem); // Remove the list item
        };

        // Append the button to the list item, and the item to the task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add event listener to the button
    addButton.addEventListener('click', addTask);

    // Allow adding tasks with the Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
