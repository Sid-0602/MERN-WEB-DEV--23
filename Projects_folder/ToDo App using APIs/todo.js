//defining a task: 
const tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('JS has started working!!');


function addTaskToDOM(task){
    const li=document.createElement('li');
    li.innerHTML=`
          <input type="checkbox" id="${task.id}" ${task.done? 'checked':''}class="custom-checkbox">
          <label for="${task.id}">${task.text}</label>
          <img src="bin.svg" class="delete" data-id="${task.id}" />
    `;

    taskList.append(li);
}
function renderList(){
    taskList.innerHTML=''; //empty the list first.
    for(let i=0;i<tasks.length;i++){
        addTaskToDOM(tasks[i]);
    }

    tasksCounter.innerHTML = tasks.length;
}

function toggleTask(taskID){
    const task = tasks.filter(function(task){
        return task.id === taskID;
    });

    if(task.length>0){
        const currentTask = task[0];
        currentTask.done = !currentTask.done;
        renderList();
        showNotification("Task toggled Successfully")
        return;
    }
    showNotification("Could not toggle the task!");
}

function deleteTask(taskId){
    //new task is filtered with the task with the value of taskID missing.
    const newTasks = tasks.filter(function(task){
        return task.id!==taskId; 
    })

    tasks = newTasks; //assigning newTasks to tasks.
    renderList();
    showNotification('Task Deleted Successfully!!');
}

function addTask(task){
    if(task){
        tasks.push(task);
        renderList();
        showNotification('Task added successfully');
        return;
    }

    showNotification('Task cannot be added :(');
}

function showNotification(text){
    alert(text);
}

function handleInputKeyPress(e){
    if(e.key==='Enter'){
        const text = e.target.value;
        console.log('Text: ',text);
        if(!text){
            showNotification('Task Text Cannot be empty!');
        }

        const task = {
            text,
            id: Date.now().toString(),
            done: false
        }
    
        e.target.value = ''; //this makes the text box empty again. 
        addTask(task); 
    }

    
}

//adding event Listener to addTaskInput. 
addTaskInput.addEventListener('keyup',handleInputKeyPress);