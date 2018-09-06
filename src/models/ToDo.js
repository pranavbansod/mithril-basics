let item = function (id, desc) {
  return {id: id, desc: desc};
};

let loadCurrentItem = function (id) {
  let currentItem = {};
  for(let index = 0; index < ToDo.items.length;index++){
    currentItem = ToDo.items[index];
    if(currentItem.id == id){
      ToDo.currentItem = currentItem;
    }
  }
};

let addNewItemToTodo = function () {
  let items = ToDo.items;
  let lastItemIndex = items.length-1;
  let lastItem = items[lastItemIndex];
  ToDo.items.push(item(lastItem.id + 1,"Click here to edit description"))
};


let ToDo = {
  title: "Things to do today",
  items: [item(1, "Eat"), item(2, "Sleep"), item(3, "Anime")],
  currentItem: {},
  load: loadCurrentItem,
  newItem: addNewItemToTodo
};

module.exports = ToDo;