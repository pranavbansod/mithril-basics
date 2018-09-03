let item = function(desc) {
    return {desc:desc}
}

let Todo = {
    title: "My ToDo",
    items : [item("Eat"),item("Sleep"),item("Anime")]
};

module.exports = Todo;