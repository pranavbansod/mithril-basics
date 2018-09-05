const m = require("mithril");
let ToDo = require("../models/ToDo");

module.exports = {
  view: function (vnode) {
    return m(".toDo", m("h1", ToDo.title), ToDo.items.map(function (item){
      return m("a.toDo-item", {href: "/edit/" + item.id, oncreate: m.route.link}, item.desc);
    }));
  }
};