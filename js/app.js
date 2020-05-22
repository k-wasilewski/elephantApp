require("../css/style.css")
require("../scss/style.scss")

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = require('./menuBtn')
    const menu = require('./menu')

    var header = document.createElement('header')
    header.appendChild(menu)
    menu.appendChild(menuBtn)
    document.body.prepend(header)

    var mainDiv = document.createElement('div')
    mainDiv.id = 'mainDiv'
    document.body.appendChild(mainDiv)
})
