const m = require("mithril")

let toDo = require("./views/ToDo")

m.route(document.body, "/toDo", {
    "/toDo": toDo
})
