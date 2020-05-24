require("core-js/stable")
require("regenerator-runtime/runtime")

describe("First elephant tab specification", () => {
    it('a new main div with a child div is created, ' +
        'and is appended to mainDiv',
        (done) => {

            document.body.innerHTML =
                '<header/>' +
                '<div id="mainDiv"/>'

            var elephant1 = require('../../js/tabs/elephant1')

            setTimeout(() => {
                expect(elephant1.classList).toContain('main')
                expect(elephant1.children[0].innerText).toContain('' +
                    'This is the first elephant')
                expect(elephant1.children[1].children[0].outerHTML).toContain('<img')
                expect(document.getElementById('mainDiv').children[0])
                    .toBe(elephant1)
                done()
            }, 4000)
        })
})