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

    var button = document.createElement("button");
    button.innerHTML = "lazily append new button";
    var mydiv = document.getElementsByClassName('my-div')[0];

    mydiv.appendChild(button);

    button.onclick = function () {
        import("./button.js")
            .then(function(module) {
                const appendedButton = module.default;
                mydiv.append(appendedButton);
            });
    }
})
