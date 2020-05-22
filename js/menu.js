var menu = document.createElement("div");
menu.id = 'menu'

var menuItems = require('./newButton')
menu.appendChild(menuItems)

module.exports = menu