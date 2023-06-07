const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

console.log(itemsArray);

document.querySelector('#enter').addEventListener('click', function() {
  const item = document.querySelector('#item');
  createItem(item);
} 
)

function displayItems() {
  let items ='';
  for(i = 0; i < itemsArray.length; i++) {
    
  }
}

function createItem(item) {
  itemsArray.push(item.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  location.reload();
}

function displayDate() { // 1.) First thing we want to do is display the date
  let date = new Date();
  date = date.toString().split(' ');
  document.querySelector('#date').textContent = `${date[1]} ${date[2]}, ${date[3]}`
}

window.onload = function() {
  displayDate();
}


//4.)Let's create the createItem function; now that we have our item we want to store it in our items array and then we want to save it in localstorage









