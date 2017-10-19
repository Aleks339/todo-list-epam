window.onload = function(){
  //array of tasks
  var taskArray = [];

  //main div.
  var todo = document.createElement('div');
  todo.setAttribute('class', 'todo');

  //main header
  var title = document.createElement('h1');
  title.setAttribute('class', 'todo_title');
  title.innerHTML = "Todolist";

  //deadline header
  var deadlineTitle = document.createElement('h5');
  deadlineTitle.setAttribute('class', 'todo_deadline-title');
  deadlineTitle.innerHTML = 'Put the deadline, please';

  //time tag
  var time = document.createElement('time');
  time.setAttribute('class', 'todo_time');
  time.setAttribute('datetime', '2017-10-19');

  // time input
  var timeInput = document.createElement('input');
  timeInput.setAttribute('type', 'date');
  timeInput.setAttribute('class', 'todo_time--input');

  //div, all tasks filter are inside of it
  var buttonTasks = document.createElement('div');
  buttonTasks.setAttribute('class', 'todo_button-task');

  //task filters
  var buttonTaskCompleted = document.createElement('button');
  buttonTaskCompleted.setAttribute('class', 'todo_button-task--button-task-completed');
  var buttonTaskUnCompleted = document.createElement('button');
  buttonTaskUnCompleted.setAttribute('class', 'todo_button-task--button-task-uncompleted');
  var buttonTaskAll = document.createElement('button');
  buttonTaskAll.setAttribute('class', 'todo_button-task--button-task-all');
  var buttonTasksPlannedOnTomorrow = document.createElement('button');
  buttonTasksPlannedOnTomorrow.setAttribute('class', 'todo_button-task--button-task-planned-on-tomorrow');
  var buttonTasksPlannedOnWeek = document.createElement('button');
  buttonTasksPlannedOnWeek.setAttribute('class', 'todo_button-task--button-task-planned-on-week');

  //filter with completed tasks
  buttonTaskCompleted.addEventListener("click", function(){
    for(i = 0; i < taskArray.length; i++){
      if(taskArray[i].getAttribute('data-complete') === '1'){
        taskArray[i].style.display = 'block';
      }else{
        taskArray[i].style.display = 'none';
      }
    }
  });

  //filter with uncompleted tasks
  buttonTaskUnCompleted.addEventListener("click", function(){
    for(i = 0; i < taskArray.length; i++){
      if(taskArray[i].getAttribute('data-complete') === '0'){
        taskArray[i].style.display = 'block';
      }else{
        taskArray[i].style.display = 'none';
      }
    }
  });

  //filter with all tasks
  buttonTaskAll.addEventListener("click", function(){
    for(i = 0; i < taskArray.length; i++){
      taskArray[i].style.display = 'block';
    }
  });

  //task filter text
  buttonTasksPlannedOnTomorrow.innerHTML = 'Tasks planned on tomorrow';
  buttonTasksPlannedOnWeek.innerHTML = 'Tasks planned on week';
  buttonTaskCompleted.innerHTML = 'Completed tasks';
  buttonTaskUnCompleted.innerHTML = 'Uncompleted tasks';
  buttonTaskAll.innerHTML = 'All tasks';

  //input type text to fill it by our tasks
  var item = document.createElement('input');
  item.setAttribute('class', 'todo_item');
  item.setAttribute("type", "text");
  item.setAttribute('size', '35');

  //button to add tasks
  var addItem = document.createElement('button');
  addItem.setAttribute("type", "button");
  addItem.innerHTML = "Add";

  //what will happen if we click on add-task button?
  addItem.addEventListener("click", function(){
    //div to wrap items of todolist
    var itemWrapper = document.createElement('div');
    itemWrapper.setAttribute('class', 'todo_item-wrapper');
    itemWrapper.setAttribute('data-complete', '0');

    //todolist checkbox
    var checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "todo_item-wrapper--checkbox");

    //button to remove item
    var closeItem = document.createElement('span');
    closeItem.innerHTML = ' [X]';
    closeItem.setAttribute('class', 'todo_item-wrapper--close');

    //click the button to remove item
    closeItem.addEventListener("click", function(){
      todo.removeChild(itemWrapper);
    });
    //todolist text
    var textItem = document.createElement('span');
    //todolist text click
    checkbox.addEventListener("click", function(){
      if(this.checked){
        //check the checkbox
        textItem.style.textDecoration = 'line-through';
        textItem.style.color = 'gray';
        itemWrapper.setAttribute('data-complete', '1');
      }else{
        //uncheck the checkbox
        textItem.style.textDecoration = 'none';
        textItem.style.color = 'inherit';
        itemWrapper.setAttribute('data-complete', '0');
      }
    });
    //value of todo item
    textItem.innerHTML = item.value;

    //deadline span
    var timeSpan = document.createElement('span');
    timeSpan.innerHTML = timeInput.value;
    var newDate = new Date();
    function Date(){
      this.innerHTML = ' ' + timeInput.value;
      //filter with tasks planned on week
      buttonTasksPlannedOnWeek.addEventListener("click", function(){
        for(i = 2; i < 7; i++){
          if (taskArray[i]){
            taskArray[i].style.display = 'block';
          }else{
            taskArray[i].style.display = 'none';
          }
        }
      });

      //filter with tasks planned on day
      buttonTasksPlannedOnTomorrow.addEventListener("click", function(){
        for(i = 0; i < 1; i++){
          if (taskArray[i]){
            taskArray[i].style.display = 'block';
          }else{
            taskArray[i].style.display = 'none';
          }
        }
      });
    };

    //push the elements into the task array
    taskArray.push(itemWrapper);

    //append elements
    todo.appendChild(itemWrapper);
    itemWrapper.appendChild(checkbox);
    itemWrapper.appendChild(textItem);
    itemWrapper.appendChild(timeSpan);
    itemWrapper.appendChild(closeItem);
  });

  //append elements
  document.body.appendChild(todo);
  todo.appendChild(title);
  todo.appendChild(deadlineTitle);
  todo.appendChild(time);
  time.appendChild(timeInput);
  todo.appendChild(buttonTasks);
  buttonTasks.appendChild(buttonTasksPlannedOnTomorrow);
  buttonTasks.appendChild(buttonTasksPlannedOnWeek);
  buttonTasks.appendChild(buttonTaskCompleted);
  buttonTasks.appendChild(buttonTaskUnCompleted);
  buttonTasks.appendChild(buttonTaskAll);
  todo.appendChild(item);
  todo.appendChild(addItem);
}
