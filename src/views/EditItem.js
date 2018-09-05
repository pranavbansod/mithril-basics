var m = require("mithril");
var toDo = require("../models/ToDo");

module.exports = {
  oninit: function (vnode) {
    toDo.load(vnode.attrs.id)
  },
  view: function () {
    return m("form", [
      m("label.label", "Description"),
      m("input.input[type=text][placeholder=Write description for ToDo item]", {id:"toDoDesc",value: toDo.currentItem.desc}),
      m("button.button[type=button]", {
        onclick: function () {
          toDo.currentItem.desc = document.getElementById("toDoDesc").value;
          console.log(toDo);
        }
      }, "Save")
    ]);
  }
};