// 1. Get references to the DOM elements we'll be working with
const taskInput = document.querySelector('#taskInput');
const addTaskButton = document.querySelector('#addTask');
const taskList = document.querySelector('#taskList');
const clearCompletedButton = document.querySelector('#clearCompleted');

// Explanation: We're using getElementById to get references to the input field, 
// both buttons, and the task list. This allows us to interact with these elements.

// 2. Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
        
        // Add click event to mark task as completed
        li.addEventListener('click', function() {
            this.classList.toggle('completed');
        });
    }
}

// Explanation:
// - We get the trimmed value from the input field.
// - If it's not empty, we create a new <li> element.
// - We set its text content to the task text.
// - We append the new <li> to the task list.
// - We clear the input field.
// - We add a click event listener to the new <li> to toggle the 'completed' class.

// 3. Add event listener to the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Explanation: When the "Add Task" button is clicked, it will call the addTask function.

// 4. Add event listener for the Enter key in the input field
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Explanation: This allows users to add a task by pressing Enter in the input field.

// 5. Function to clear completed tasks
function clearCompleted() {
    const completedTasks = taskList.querySelectorAll('.completed');
    completedTasks.forEach(function(task) {
        task.remove();
    });
}

// Explanation:
// - We use querySelectorAll to get all elements with the 'completed' class.
// - We then use forEach to iterate over these elements and remove them.

// 6. Add event listener to the "Clear Completed" button
clearCompletedButton.addEventListener('click', clearCompleted);

// Explanation: When the "Clear Completed" button is clicked, it will call the clearCompleted function.
