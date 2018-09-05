var m = require("mithril");
var toDo = require("../models/ToDo");

module.exports = {
  oninit: function (vnode) {
    toDo.load(vnode.attrs.id)
  },
  view: function () {
    return m("form",[
      m("h3.label", "Description"),
      m("input.input#toDoEdit[type=text][placeholder=Write description for ToDo item]", {
        value: toDo.currentItem.desc
      }),
      m("button.button[type=button]",{
        onclick: function() {
          let newDesc = document.getElementById("toDoEdit").value;
          toDo.currentItem.desc = newDesc;
        }
      }, "Save")
    ]);
  }
};