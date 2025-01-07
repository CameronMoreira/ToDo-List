// Purpose: To store all the variables that are used in the app.js file.
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

//Function to add a task to the list
function addTask() {
    const task = taskInput.value.trim(); //Get the value of the task input
    if (task === '') {
        alert('Please enter a task');
        return;
    } 

    const listItem = document.createElement('li'); //Create a new list item
    listItem.textContent = task; //Set the text content of the list item to the task


    //Create a button to remove the task
    const deleteButton = document.createElement('span') //Create a new span element
    deleteButton.textContent = '❌'; //Set the text content of the span to ❌
    deleteButton.className = 'deleteButton'; //Set the class name of the span to deleteButton

    listItem.appendChild(deleteButton); //Append the delete button to the list item. Why do we do this?
    taskList.appendChild(listItem); //Append the list item to the task list

    //clear the input field
    taskInput.value = '';

    //add event listener to othe delete button
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    //add event listener to the list item
    listItem.addEventListener('click', function() {
        listItem.style.textDecoration = listItem.style.textDecoration === 'line-through' ? '' : 'line-through'; //Toggle the line-through style of the list item
    });
}

    // add event listener to the "add" button
    addButton.addEventListener('click', addTask); //Add the addTask function to the click event of the add button

    // allow adding tasks by pressing enter
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
