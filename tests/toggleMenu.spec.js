require("core-js/stable")
require("regenerator-runtime/runtime")

describe("toggleMenu function specification", () => {
    it('menuItems display is toggled by function',
        (done) => {

            document.body.innerHTML =
                '<div id="root">' +
                    '<div id="menu"></div> ' +
                    '<div id="mainDiv"></div>' +
                '</div>'

            var menuItems = require('../js/menu/menuItems')
            document.body.appendChild(menuItems)

            var toggleMenu = require('../js/func/toggleMenu')

            toggleMenu.func()

            expect(menuItems.classList).toContain('hidden')
            setTimeout(() => {
                expect(menuItems.classList[0]).toBeUndefined()
                done()
            }, 4000)
        })
})