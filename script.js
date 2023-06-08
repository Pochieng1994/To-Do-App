const itemsContainer = document.querySelector('#items');
const itemTemplate = document.querySelector('#itemTemplate');
const addButton = document.querySelector('#add');

/*Next step is to fetch the existing items from localstorage, local storage is the way we achieve
the refresh and the items still being there. So we can create a function that fetches the local storage 
for existing items.*/

let items = getItems();

function getItems() {
  let value = localStorage.getItem('todo') || '[]' ;

  return JSON.parse(value);

}

/*The next function we need to define is to set the items once a user had added an item or changed an item we want to
set the item back we want to refresh what we just saved*/

function setItems(items) {
  let itemJson = JSON.stringify(items);

  localStorage.setItem('todo', itemJson);
}

/* We can now define the logic for adding a new item we use unshift or push to add an item at the front or back of the array
because we want the new item to appear either at the top or bottom*/

function addItem() {
  items.push({
    description: '',
    completed: false
  });

  setItems(items);
  refreshList();
}

function updateItem(item, key, value) {
  item[key] = value;
  setItems(items);
  refreshList();
}

/*You want to refresh the list once the item has been added, the refresh list is going to take the list of items 
the it is going to render that to the user */

function refreshList() {
  //TODO sort items

  itemsContainer.textContent = '';

  for (const item of items) {
    const itemElement = itemTemplate.content.cloneNode(true);
    const descriptionInput = itemElement.querySelector('.item-description');
    const checkboxInput = itemElement.querySelector('.item-completed')

    descriptionInput.value = item.description;
    checkboxInput.checked = item.completed;

    descriptionInput.addEventListener('change', function() {
      updateItem(item, 'description', descriptionInput.value )
    })

    checkboxInput.addEventListener('change', function() {
      updateItem(item, 'completed', checkboxInput.checked)
    })

    itemsContainer.append(itemElement);
  }


}


addButton.addEventListener('click', function() {
  addItem();
})



refreshList();











