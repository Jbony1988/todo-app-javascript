// 1. Get references to the DOM elements we'll be working with
// Explanation: We're using document.querySelector to get references to the input field, 
// both buttons, and the task list. This allows us to interact with these elements.

// 2. Define a function to add a new task
// Explanation:
// - We get the trimmed value from the input field.
// - If it's not empty, we create a new <li> element.
// - We set its text content to the task text.
// - We append the new <li> to the task list.
// - We clear the input field.
// - We add a click event listener to the new <li> to toggle the 'completed' class.

// 3. Add event listener to the "Add Task" button
// Explanation: When the "Add Task" button is clicked, it will call the addTask function.

// 4. Add event listener for the Enter key in the input field
// Explanation: This allows users to add a task by pressing Enter in the input field.

// 5. Define a function to clear completed tasks
// Explanation:
// - We use document.querySelectorAll to get all elements with the 'completed' class.
// - We then use forEach to iterate over these elements and remove them.

// 6. Add event listener to the "Clear Completed" button
// Explanation: When the "Clear Completed" button is clicked, it will call the clearCompleted function.