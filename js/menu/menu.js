var menu = document.createElement("div");
menu.id = 'menu'

var menuItems = require('./menuItems').menuItems()
menu.appendChild(menuItems)

module.exports = menu