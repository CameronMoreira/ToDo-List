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

    //Create a date object where the USER sets the completion date of the task
     const completionDate = new Date(); //Create a new date object with the value of the task input
     const day = completionDate.getDate(); //Get the day of the completion date
     const month = completionDate.getMonth() + 1; //Get the month of the completion date
     const year = completionDate.getFullYear(); //Get the year of the completion date
    const formattedDate = `${day}/${month}/${year}`; //Create a formatted date string
   

    //Create a span element to display the completion date of the task
    const dateSpan = document.createElement('span'); //Create a new span element
    dateSpan.textContent = formattedDate; //Set the text content of the span to the completion date
    dateSpan.className = 'dateSpan'; //Set the class name of the span to dateSpan

    //Allow the user to edit the span element of the date to insert their own date
    dateSpan.addEventListener('click', function() {
        const newDate = prompt('Please enter a new date'); //Prompt the user to enter a new date


        if (newDate === null) { //If the user clicks cancel
            return; //Exit the function
        }

        //make the object a scroll wheel for the user selecting the date

        const newDateObj = new Date(newDate); //Create a new date object with the new date
        const newDay = newDateObj.getDate(); //Get the day of the new date
        const newMonth = newDateObj.getMonth() + 1; //Get the month of the new date
        const newYear = newDateObj.getFullYear(); //Get the year of the new date
        const newFormattedDate = `${newDay}/${newMonth}/${newYear}`; //Create a formatted date string
        dateSpan.textContent = newFormattedDate; //Set the text content of the span to the new formatted date
    });

    listItem.appendChild(dateSpan); //Append the date span to the list item




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


