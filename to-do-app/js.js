let todoItems = [
];

//var todoList = document.createElement('ul');
let todoList = document.getElementById('todoList');

function takeInput() {
  let itemNew = document.getElementById('input').value;
  document.getElementById('input').value = null;
  updateList(itemNew);
}

function updateList(itemNew) {
    let listItem = document.createElement('li');
    let todoText = document.createTextNode(itemNew);
    listItem.appendChild(todoText);
    todoList.appendChild(listItem);
    addToList(itemNew);
  }

  function addToList(itemNew) {
    todoItems.push(itemNew);
    console.log(todoItems);
  }
