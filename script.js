const ol = document.querySelector('ol');
const input = document.querySelector('#item');
const addButton = document.querySelector('#add');



todoItems = localStorage.getItem('text') ? JSON.parse(localStorage.getItem('text')) : [];
//were checking to see if there are any todoitems in localstorage if there are we are grabbing 
//what's stored in localstorage and parsing it, parsing is turning something from a string
//back into the regular object that it is.

function addTodo() {
  let textInput = input.value;

  if(textInput === '') {
    return;
  }


  const todo = {
    text: textInput,
    id: Math.floor(Math.random() * 10000),
  }

  todoItems.push(todo);
  setItem();
  addTodoToUi(todo);
  input.value = '';
}

function displayTodos() {
  todoItems.forEach(function(todo) {
  addTodoToUi(todo);
  })
}

function setItem() {
  let stringifiedObj = JSON.stringify(todoItems);
  localStorage.setItem('text', stringifiedObj);
}

function addTodoToUi(todo) { 
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

    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then (response => { 
        for(let i = 0; i < 5; i++) {
          let responseData = response.data[i].title;

            const todo = {
              text: responseData,
              id: Math.floor(Math.random() * 10000),
            }

            todoItems.push(todo);
            setItem();
            addTodoToUi(todo);
      }
    })
  }
}



todoFromApi()

displayTodos();


/* 
//addTodo(responseData);
            const todoApi = {
              text: responseData,
              id: Date.now(),
            }

            todoItems.push(todoApi);
            setItem();
            addTodoToUi(todoApi)
            id: Date.now()

            */









