require("core-js/stable")
require("regenerator-runtime/runtime")

describe("Home tab specification", () => {
    it('a new main div with a child div is created, ' +
        'and is appended to mainDiv',
        (done) => {

            document.body.innerHTML =
                '<header/>' +
                '<div id="mainDiv"/>'

            var home = require('../../js/tabs/home')

            setTimeout(() => {
                expect(home.classList).toContain('main')
                expect(home.children[0].innerText).toContain('' +
                    'Welcome to my elephant js app.')
                expect(document.getElementById('mainDiv').children[0])
                    .toBe(home)
                done()
            }, 4000)
        })
})