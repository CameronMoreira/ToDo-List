// Purpose: To store all the variables that are used in the app.js file.
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

//Function to add a task to the list
function addTask() {
    const task = taskInput.value; //Get the value of the task input
    if (task === '') {
        alert('Please enter a task');
        return;
    } 

    const listItem = document.createElement('li'); //Create a new list item
    listItem.textContent = task; //Set the text content of the list item to the task


    //Create a button to remove the task
    }