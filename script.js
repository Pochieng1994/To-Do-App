const ol = document.querySelector('ol');
const input = document.querySelector('#item');
const addButton = document.querySelector('#add');
const deleteButton = document.querySelector('#delete');


itemsArray = localStorage.getItem('items', ) ? JSON.parse(localStorage.getItem('items')) : [];


itemsArray.forEach(listMaker); 

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
})













