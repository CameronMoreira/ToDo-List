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

    const taskDateInput = document.createElement('input'); //Create a new input element
    taskDateInput.type = 'date'; //Set the type of the input to date
    taskDateInput.className = 'taskDateInput'; //Set the class name of the input to taskDateInput
   
    //Create a span element to display the completion date of the task
    const dateSpan = document.createElement('span'); //Create a new span element
    dateSpan.textContent = "Pick your date"; //Set the text content of the span to the completion date
    dateSpan.className = 'dateSpan'; //Set the class name of the span to dateSpan


    //Add event listener to the date input
    taskDateInput.addEventListener('change', (event) => {
        const [year, month, day] = event.target.value.split('-'); //Split the date string into an array of year, month, and day
        const selectedDate = new Date(year, month - 1, day); //Create a new date object with the completion date
        dateSpan.textContent = selectedDate.toDateString(); //Set the text content of the span to the completion date
        checkIfLate(listItem, selectedDate); //Check if the task was completed on time
    });

    function checkIfLate(taskElement, selectedDate) {
        //Check if task was completed on time
        const currentDate = new Date(); //Create a new date object with the current date
        if (selectedDate < currentDate) { //If the completion date is less than the current date
            taskElement.style.color = 'red'; //Set the background color of the task element to red
        } else {
            taskElement.style.color = ''; //reset the background color of the task element
        }

    }
    

    //Create a button to remove the task
    const deleteButton = document.createElement('span') //Create a new span element
    deleteButton.textContent = '❌'; //Set the text content of the span to ❌
    deleteButton.className = 'deleteButton'; //Set the class name of the span to deleteButton

    listItem.appendChild(taskDateInput); //Append the date input to the list item
    listItem.appendChild(dateSpan); //Append the date span to the list item
    listItem.appendChild(deleteButton); //Append the delete button to the list item. 
    taskList.appendChild(listItem); //Append the list item to the task list

    //clear the input field
    taskInput.value = '';

    //add event listener to othe delete button
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
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


