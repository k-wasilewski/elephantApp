require("core-js/stable")
require("regenerator-runtime/runtime")

describe("toggleMenu function specification", () => {
    it('menuItems display is toggled by function',
        (done) => {
            document.body.innerHTML =
                '<div id="menuItems" class="hidden"></div>'+
                '<div id="mainDiv"></div>'

            var mockMenuItems = document.getElementById('menuItems')

            var toggleMenu = require('../js/func/toggleMenu')

            toggleMenu.func(mockMenuItems)

            expect(mockMenuItems.classList).toContain('hidden')
            setTimeout(() => {
                expect(mockMenuItems.classList[1]).toBeUndefined()
                done()
            }, 4000)
        })
})