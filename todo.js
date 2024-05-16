//  the task input field,  task button, task list, and task actions buttons
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const deleteTaskBtn = document.getElementById('delete-task-btn');
const completeTaskBtn = document.getElementById('complete-task-btn');

//  event listeners for adding, deleting, and marking tasks as complete
addTaskBtn.addEventListener('click', addTask);
deleteTaskBtn.addEventListener('click', deleteTask);
completeTaskBtn.addEventListener('click', completeTask);

// Function to add a new task
function addTask() {
	const taskText = taskInput.value;
	if (taskText !== '') {
		const taskListItem = document.createElement('li');
		taskListItem.textContent = taskText;
		taskList.appendChild(taskListItem);
		taskInput.value = '';
	}
}

// Function to delete a task
function deleteTask() {
	const taskListItem = taskList.querySelector('li');
	if (taskListItem) {
		taskList.removeChild(taskListItem);
	}
}

// Function to mark a task as complete
function completeTask() {
	const taskListItem = taskList.querySelector('li');
	if (taskListItem) {
		taskListItem.style.textDecoration = 'line-through';
	}
}
