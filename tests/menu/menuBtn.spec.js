require("core-js/stable")
require("regenerator-runtime/runtime")

describe("menu button specification", () => {
    it('a new button icon is created',
        (done) => {

            document.body.innerHTML =
                '<div id="menuItems" class="hidden">'

            var menuBtn = require('../../js/menu/menuBtn')

            var myMenuMock = document.getElementById('menuItems')
            myMenuMock.appendChild(menuBtn)

            setTimeout(() => {
                expect(myMenuMock.innerHTML).toEqual(
                '<img id="menuBtn" src="../img/menu.svg">')
                done()
            }, 4000)
        })

    it('button has a "click" event listener, which toggles the display of menu',
        (done) => {

            document.body.innerHTML =
                '<div id="root">' +
                    '<div id="menu"></div> ' +
                    '<div id="mainDiv"></div>' +
                '</div>'

            var menuItems = require('../../js/menu/menuItems')
            document.body.appendChild(menuItems)

            var menuBtn = require('../../js/menu/menuBtn')
            menuItems.appendChild(menuBtn)

            expect(menuItems.classList).toContain('hidden')
            menuBtn.click()
            setTimeout(() => {
                expect(menuItems.classList[0]).toBeUndefined()
                done()
            }, 4000)
        })
})