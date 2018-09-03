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

let ToDo = {
  title: "Things to do today",
  items: [item(1, "Eat"), item(2, "Sleep"), item(3, "Anime")],
  currentItem: {},
  load: loadCurrentItem
};

module.exports = ToDo;