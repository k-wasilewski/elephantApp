require("../css/style.css")
require("../scss/style.scss")

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = require('./menu/menuBtn')
    const menu = require('./menu/menu')

    const root = document.getElementById('root')

    var header = document.createElement('header')
    header.appendChild(menu)
    menu.appendChild(menuBtn)
    root.prepend(header)

    var mainDiv = document.createElement('div')
    mainDiv.id = 'mainDiv'
    root.appendChild(mainDiv)
})
