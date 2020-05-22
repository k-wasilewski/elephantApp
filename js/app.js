require("../css/style.css")
require("../scss/style.scss")

document.addEventListener("DOMContentLoaded", function () {
    var img = document.getElementById("img");
    img.src = require("./img");

    const menuBtn = require('./menuBtn')
    const menu = require('./menu')

    var header = document.createElement('header')
    header.appendChild(menu)
    menu.appendChild(menuBtn)
    document.body.prepend(header)


})
