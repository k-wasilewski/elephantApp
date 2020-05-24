require("core-js/stable")
require("regenerator-runtime/runtime")

describe("Second elephant tab specification", () => {
    it('a new main div with a child div is created, ' +
        'and is appended to mainDiv',
        (done) => {

            document.body.innerHTML =
                '<header/>' +
                '<div id="mainDiv"/>'

            var elephant2 = require('../../js/tabs/elephant2')

            setTimeout(() => {
                expect(elephant2.classList).toContain('main')
                expect(elephant2.children[0].innerText).toContain('' +
                    'This is the second elephant')
                expect(elephant2.children[1].children[0].outerHTML).toContain('<img')
                expect(document.getElementById('mainDiv').children[0])
                    .toBe(elephant2)
                done()
            }, 4000)
        })
})