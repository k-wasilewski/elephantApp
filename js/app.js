require('file-loader?name=[name].[ext]!../index.html');

require("./printer.js");
require("../css/style.css")
require("../scss/style.scss")

document.addEventListener("DOMContentLoaded", function () {
    var add = require("./calc.js");
    console.log(add(2,2));

    const abc = 1222;
    console.log(add(abc,2));

    document.getElementById("img").src = require("./img");
})
