require("../css/style.css")
require("../scss/style.scss")

document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById('root')

    var header = document.createElement('header')
    root.prepend(header)

    const menu = require('./menu/menu')
    header.appendChild(menu)

    const menuBtn = require('./menu/menuBtn')
    menu.appendChild(menuBtn)

    var mainDiv = document.createElement('div')
    mainDiv.id = 'mainDiv'
    root.appendChild(mainDiv)
    
})
