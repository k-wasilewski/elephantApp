var menuItems = document.createElement("div");
menuItems.id = "menuItems";
menuItems.classList.add('hidden')

addMenuItem(menuItems, 'Home')
addMenuItem(menuItems, 'Sample content')
addMenuItem(menuItems, 'About')
addMenuItem(menuItems, 'Contact')

function addMenuItem(element, text) {
    var item1 = document.createElement('span')
    item1.className = 'menuItem'
    item1.innerText = text
    element.appendChild(item1)
}

module.exports = menuItems;