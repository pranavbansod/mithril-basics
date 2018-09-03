const m = require("mithril");
let todo = require("../models/Todo")

module.exports = {
    view: function () {
        let getDescForItem = function (item) {
            return m(".todo-item",item.desc);
        };
        return m(".todo",todo.items.map(getDescForItem));
    }
};