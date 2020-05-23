var menuItems = document.createElement("div");
menuItems.id = "menuItems";
menuItems.classList.add('hidden')

let contentArr = fillContentArr()

async function fillContentArr() {
    let contentArr = []
    let home = await addMenuItem(menuItems, 'Home')
    contentArr.push(home)
    let elephant1 = await addMenuItem(menuItems, 'First elephant')
    contentArr.push(elephant1)
    let elephant2 = await addMenuItem(menuItems, 'Second elephant')
    contentArr.push(elephant2)
    let contact = await addMenuItem(menuItems, 'Contact')
    contentArr.push(contact)
    return contentArr
}

async function addMenuItem(element, text) {
    var item = document.createElement('span')
    item.className = 'menuItem'
    item.innerText = text
    element.appendChild(item)

    if (text==='Home') return await import('../tabs/home').then(async function (module) {
        module = require('../tabs/home')   //for jest
        return await menuItemOnclickShowContent(item, module)
    })
    else if (text==='First elephant') return import('../tabs/elephant1').then(function (module) {
        module = require('../tabs/elephant1')   //for jest
        return menuItemOnclickShowContent(item, module)
    })
    else if (text==='Second elephant') return import('../tabs/elephant2').then(function (module) {
        module = require('../tabs/elephant2')   //for jest
        return menuItemOnclickShowContent(item, module)
    })
    else if (text==='Contact') return import('../tabs/contact').then(function (module) {
        module = require('../tabs/contact')   //for jest
        return menuItemOnclickShowContent(item, module)
    })
}

function menuItemOnclickShowContent(element, content) {
    element.addEventListener('click', function () {
        import('../func/toggleVisibility')
            .then(function (module) {
                module.func(content)
                return module.parent(content)
            })
    })

    return import('../func/toggleVisibility')
        .then(function (module) {
            return module.parent(content)
        })
}

module.exports = {
    menuItems: function () {return menuItems},
    contentArr: async function () {
        let result = await contentArr
        return await result
    }
};