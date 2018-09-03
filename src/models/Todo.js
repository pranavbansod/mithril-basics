let item = function(desc) {
    return {desc:desc}
};

let Todo = {
    title: "Things to do today",
    items : [item("Eat"),item("Sleep"),item("Anime")]
};

module.exports = Todo;