//array of tasks
var taskArray = [];

//main div.
var todo = document.createElement('div');

//header
var title = document.createElement('h1');
title.style.color = "green";
title.style.fontSize = "80px";
title.style.fontStyle = 'italic';
title.innerHTML = "Todolist";

//div, all tasks filter are inside of it
var buttonTasks = document.createElement('div');
buttonTasks.style.marginBottom = '20px';

//task filters
var buttonTaskCompleted = document.createElement('button');
var buttonTaskUnCompleted = document.createElement('button');
var buttonTaskAll = document.createElement('button');

//filter with completed tasks
buttonTaskCompleted.onclick = function(){
  for(i = 0; i < taskArray.length; i++){
    if(taskArray[i].getAttribute('data-complete') === '1'){
      taskArray[i].style.display = 'block';
    }else{
      taskArray[i].style.display = 'none';
    }
  }
}

//filter with uncompleted tasks
buttonTaskUnCompleted.onclick = function(){
  for(i = 0; i < taskArray.length; i++){
    if(taskArray[i].getAttribute('data-complete') === '0'){
      taskArray[i].style.display = 'block';
    }else{
      taskArray[i].style.display = 'none';
    }
  }
}

//filter with all tasks
buttonTaskAll.onclick = function(){
  for(i = 0; i < taskArray.length; i++){
    taskArray[i].style.display = 'block';
  }
}

//task filter text
buttonTaskCompleted.innerHTML = 'Completed tasks';
buttonTaskUnCompleted.innerHTML = 'Uncompleted tasks';
buttonTaskAll.innerHTML = 'All tasks';

//input type text to fill it by our tasks
var item = document.createElement('input');
item.setAttribute("type", "text");
item.setAttribute('size', '35');
item.setAttribute("class", "inputValue");

//button to add tasks
var add = document.createElement('button');
add.setAttribute("type", "button");
add.innerHTML = "Add";

//what will happen if we click on add-task button?
add.addEventListener("click", function(){
  //div to wrap items of todolist
  var itemWrapper = document.createElement('div');
  itemWrapper.style.display = "block";
  itemWrapper.style.margin = "10px";
  itemWrapper.setAttribute('data-complete', '0');

  //todolist checkbox
  var checkbox = document.createElement('input');
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "checkbox");

  //button to remove item
  var x = document.createElement('span');
  x.innerHTML = ' [X]';
  x.style.color = 'red';
  //hover the button to remove item
  x.onmouseover = function() {
    x.style.cursor = 'pointer';
  }
  x.onmouseout = function() {
    x.style.cursor = 'auto';
  }
  //click the button to remove item
  x.onclick = function(){
    todo.removeChild(itemWrapper);
  }
  //todolist text
  var textItem = document.createElement('span');
  //todolist text click
  checkbox.onclick = function() {
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
  }
  //value of todo item
  textItem.innerHTML = item.value;

  //time tag
  var time = document.createElement('time');
  time.setAttribute('datetime', '2017-11-22T18:30');

  // time input
  var timeInput = document.createElement('input');
  timeInput.setAttribute('type', 'date');
  timeInput.style.marginBottom = '15px';

  timeInput.addEventListener("click", function(){
    var deadline = document.createElement('span');
    deadline.innerHTML = timeInput.value;
  });

  //push the elements into the task array
  taskArray.push(itemWrapper);

  //append elements
  todo.appendChild(itemWrapper);
  itemWrapper.appendChild(checkbox);
  itemWrapper.appendChild(textItem);
  itemWrapper.appendChild(x);
  itemWrapper.appendChild(time);
  time.appendChild(timeInput);
  todo.appendChild(deadline);
});

//append elements
document.body.appendChild(todo);
todo.appendChild(title);
todo.appendChild(buttonTasks);
buttonTasks.appendChild(buttonTaskCompleted);
buttonTasks.appendChild(buttonTaskUnCompleted);
buttonTasks.appendChild(buttonTaskAll);
todo.appendChild(item);
todo.appendChild(add);
