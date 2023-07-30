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
  li.setAttribute('id', todo.id);
  button.textContent = 'Delete'
  button.style.cssText += 'font-size:15px; padding: 5px; border-radius: 8px; margin-left: 20px;'
  li.style.cssText += 'padding:5px;'
  li.append(button);
  ol.append(li);
  button.addEventListener('click', function() {
    deleteTodo(todo.id);
  })
}

addButton.addEventListener('click', function() {
  addTodo()
})

function deleteTodo(todoId) { 
  for(let i = 0; i < todoItems.length; i++) {
    if(todoItems[i].id === todoId) {
      todoItems.splice(i, 1);
      localStorage.setItem('text', JSON.stringify(todoItems));
      document.getElementById(todoId).remove();
    }
  }
}

function todoFromApi() {

  if(localStorage.getItem('text') === null) {

  }

  axios.get('https://jsonplaceholder.typicode.com/posts/')
  .then (response => {
    response.data[0].title
  })
}



displayTodos();












