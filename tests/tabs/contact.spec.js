require("core-js/stable")
require("regenerator-runtime/runtime")

describe("Home tab specification", () => {
    it('a new main div with a child div is created, ' +
        'and is appended to mainDiv',
        (done) => {

            document.body.innerHTML =
                '<header/>' +
                '<div id="mainDiv"/>'

            var contact = require('../../js/tabs/contact')

            setTimeout(() => {
                expect(contact.classList).toContain('main')
                expect(contact.children[0].children[0].innerText).toContain('' +
                    'Kuba Wasilewski')
                expect(contact.children[0].children[1].innerText).toContain('' +
                    'k.k.wasilewski@gmail.com')
                expect(contact.children[0].children[2].innerText).toContain('' +
                    'github.com/k-wasilewski')
                expect(document.getElementById('mainDiv').children[0])
                    .toBe(contact)
                done()
            }, 4000)
        })
})