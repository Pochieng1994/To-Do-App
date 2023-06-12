const ol = document.querySelector('ol');
const input = document.querySelector('#item');
const addButton = document.querySelector('#add');
const deleteButton = document.querySelector('#delete');



todoItems = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


function addTodo() {
  let textInput = input.value;

  const todo = {
    text: textInput,
    id: Date.now(),
  }

  todoItems.push(todo);
  console.log(todoItems)
  setItem();
  listMaker(textInput);
  input.value = '';
}

function setItem() {
  let stringifiedObj = JSON.stringify(todoItems);
  localStorage.setItem('text', stringifiedObj);
}

function listMaker(text) {
  const li = document.createElement('li');
  li.textContent = text;
  ol.appendChild(li);
}


addButton.addEventListener('click', function() {
  
  addTodo()
})



/*Now we are going to create an array where were going to store all of the items on our todo list we have 
to check and see whether or not were using local storage if we are then we are going to initialize our array
w/ the data thats already in our local storage. If were not using local storage then were going to create a 
new array*/

/*itemsArray = localStorage.getItem('items', ) ? JSON.parse(localStorage.getItem('items')) : [];


itemsArray.forEach(listMaker); 

 Now we have to place the data within our items array on our screen


function listMaker(text) {
  const li = document.createElement('li');
  li.textContent = text;
  ol.appendChild(li);
}

addButton.addEventListener('click', function() {
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  listMaker(input.value);
  input.value = '';
})

deleteButton.addEventListener('click', function() {
  localStorage.clear();
  ol.textContent = '';
  itemsArray = [];
})*/













