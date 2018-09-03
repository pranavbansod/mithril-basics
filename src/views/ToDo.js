const m = require("mithril");
let toDo = require("../models/Todo")

module.exports = {
    view: function () {
        let getDescForItem = function (item) {
            return m(".toDo-item",item.desc);
        };
        let title = m("h1",toDo.title);
        let itemDivs = toDo.items.map(getDescForItem);
        return m(".toDo",title,itemDivs);
    }
};