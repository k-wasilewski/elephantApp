var menu = document.createElement("div");
menu.id = 'menu'

var menuItems = require('./menuItems')
menu.appendChild(menuItems)

module.exports = menu