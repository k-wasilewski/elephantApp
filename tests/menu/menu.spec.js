require("core-js/stable")
require("regenerator-runtime/runtime")

describe("menu specification", () => {
    it('a new menu div is created with menuItems appended',
        (done) => {

            document.body.innerHTML =
                '<header/>' +
                '<div id="mainDiv"/>'

            var menu = require('../../js/menu/menu')

            var myHeaderMock = document.getElementsByTagName('header')[0]
            myHeaderMock.appendChild(menu)

            setTimeout(() => {
                expect(menu.innerHTML).
                    toEqual(
                        '<div id="menuItems" class="hidden">' +
                                    '<span class="menuItem"></span>' +
                                    '<span class="menuItem"></span>' +
                                    '<span class="menuItem"></span>' +
                                    '<span class="menuItem"></span>' +
                                '</div>')
                done()
            }, 4000)
        })
})