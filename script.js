const ol = document.querySelector('ol');
const input = document.querySelector('#item');
const addButton = document.querySelector('#add');




todoItems = localStorage.getItem('text') ? JSON.parse(localStorage.getItem('text')) : [];


function addTodo() {
  let textInput = input.value;

  if(textInput === '') {
    return;
  }

  const todo = {
    text: textInput,
    id: Date.now(),
  }

  todoItems.push(todo);
  setItem();
  listMaker(todo);
  input.value = '';
}

function displayTodos() {
  todoItems.forEach(function(todo) {
  listMaker(todo);
  })
}

function setItem() {
  let stringifiedObj = JSON.stringify(todoItems);
  localStorage.setItem('text', stringifiedObj);
}

function listMaker(todo) { 
  const li = document.createElement('li');
  const button = document.createElement('button');
  li.textContent = todo.text;
  li.setAttribute('id', todo.id)
  button.textContent = 'Delete'
  button.style.cssText += 'font-size:18px; padding: 6px; border-radius: 8px;'
  ol.append(li, button);
  button.addEventListener('click', function() {
    deleteTodo();
  })
}

addButton.addEventListener('click', function() {
  addTodo()
})

function deleteTodo() { 
  for(let i = 0; i < todoItems.length; i++) {
    if(todoItems[i].id) {
      todoItems.splice(i, 1);
      localStorage.setItem('text', JSON.stringify(todoItems));
    }
  }
}


displayTodos();


/*function deleteTodo(index) { //Pass in the ID of the todo as a parameter
  todoItems.splice(index, 1);
  localStorage.setItem('text', JSON.stringify(todoItems));
  location.reload();
}
*/











