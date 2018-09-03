const m = require("mithril");
let ToDo = require("../models/ToDo");

module.exports = {
    view: function () {
        let getDescForItem = function (item) {
            return m("a.toDo-item",{href: "/edit/" + item.id, oncreate: m.route.link},item.desc);
        };
        let title = m("h1",ToDo.title);
        let itemDivs = ToDo.items.map(getDescForItem);
        return m(".toDo",title,itemDivs);
    }
};