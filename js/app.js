//require('file-loader?name=index.[ext]!../app.html');

require("./printer.js");
require("../css/style.css")
require("../scss/style.scss")

document.addEventListener("DOMContentLoaded", function () {
    var add = require("./calc.js");
    console.log(add(2,2));

    const abc = 1222;
    console.log(add(abc,2));

    var img = document.getElementById("img");
    img.src = require("./img");

    const oldButton = require('./oldButton')

    var mydiv = document.getElementsByClassName('my-div')[0];
    mydiv.appendChild(oldButton);
    module.exports = mydiv

})
