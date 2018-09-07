let item = function (id, desc) {
  return {id: id, desc: desc};
};

let loadCurrentItem = function (id) {
  let currentItem = {};
  for (let index = 0; index < ToDo.items.length; index++) {
    currentItem = ToDo.items[index];
    if (currentItem.id == id) {
      ToDo.currentItem = currentItem;
    }
  }
};

let getIndexOfItem = function (id) {
  let items = ToDo.items;
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    if (item.id == id) {
      return items.indexOf(item);
    }
  }
};

let addNewItemToTodo = function () {
  let items = ToDo.items;
  if (items.length == 0) {
    ToDo.items.push(item(1, "Click here to edit description"))
  } else {
    let lastItemIndex = items.length - 1;
    let lastItem = items[lastItemIndex];
    ToDo.items.push(item(lastItem.id + 1, "Click here to edit description"))
  }
};

let editDesc = function(newDesc) {
  ToDo.currentItem.desc = newDesc;
};

let deleteItem = function (id) {
  let indexOfItem = ToDo.getIndexOfItem(id);
  ToDo.items.splice(indexOfItem, 1);
};

let getItems = function () {
  const ID = 'items';
  let data = JSON.parse(localStorage.getItem(ID)) || JSON.parse('[]');
  return data;
};

let save = function() {
  const ID = 'items';
  localStorage.setItem(ID,JSON.stringify(ToDo.items));
};

let ToDo = {
  title: "Things to do today",
  items: getItems(),
  currentItem: {},
  getIndexOfItem: getIndexOfItem,
  load: loadCurrentItem,
  newItem: addNewItemToTodo,
  editDesc: editDesc,
  deleteItem: deleteItem,
  save: save
};

module.exports = ToDo;