const m = require("mithril");

let toDo = require("./views/ToDo");
let editItem = require("./views/EditItem");

m.route(document.body, "/toDo", {
    "/toDo": toDo,
    "/edit/:id": editItem
});
