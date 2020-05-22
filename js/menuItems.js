var menuItems = document.createElement("div");
menuItems.id = "menuItems";
menuItems.classList.add('hidden')

addMenuItem(menuItems, 'Home')
addMenuItem(menuItems, 'Sample content')
addMenuItem(menuItems, 'About')
addMenuItem(menuItems, 'Contact')

function addMenuItem(element, text) {
    var item = document.createElement('span')
    item.className = 'menuItem'
    item.innerText = text
    element.appendChild(item)

    if (text==='Sample content') import('./sampleContent').then(function (module) {
        menuItemOnclickShowContent(item, module)
    })
    else if (text==='Home') import('./home').then(function (module) {
        menuItemOnclickShowContent(item, module)
    })
    else if (text==='About') import('./about').then(function (module) {
        menuItemOnclickShowContent(item, module)
    })
    else if (text==='Contact') import('./contact').then(function (module) {
        menuItemOnclickShowContent(item, module)
    })
}

function menuItemOnclickShowContent(element, content) {
    element.addEventListener('click', function () {
        import('./toggleVisibility')
            .then(function (module) {
                module.func(content)
            })
    })
}

module.exports = menuItems;