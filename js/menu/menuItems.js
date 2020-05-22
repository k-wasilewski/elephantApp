var menuItems = document.createElement("div");
menuItems.id = "menuItems";
menuItems.classList.add('hidden')

addMenuItem(menuItems, 'Home')
addMenuItem(menuItems, 'First elephant')
addMenuItem(menuItems, 'Second elephant')
addMenuItem(menuItems, 'Contact')

function addMenuItem(element, text) {
    var item = document.createElement('span')
    item.className = 'menuItem'
    item.innerText = text
    element.appendChild(item)

    if (text==='Home') import('../tabs/home').then(function (module) {
        menuItemOnclickShowContent(item, module)
    })
    else if (text==='First elephant') import('../tabs/elephant1').then(function (module) {
        menuItemOnclickShowContent(item, module)
    })
    else if (text==='Second elephant') import('../tabs/elephant2').then(function (module) {
        menuItemOnclickShowContent(item, module)
    })
    else if (text==='Contact') import('../tabs/contact').then(function (module) {
        menuItemOnclickShowContent(item, module)
    })
}

function menuItemOnclickShowContent(element, content) {
    element.addEventListener('click', function () {
        import('../func/toggleVisibility')
            .then(function (module) {
                module.func(content)
            })
    })
}

module.exports = menuItems;