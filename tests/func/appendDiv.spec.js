require("core-js/stable")
require("regenerator-runtime/runtime")

describe("appendDiv function specification", () => {
    it('a new div with float: left and correct width ' +
        'is appended to the passed element',
        (done) => {

            document.body.innerHTML =
                '<div class="my-div"/>'

            var appendDiv = require('../../js/func/appendDiv')

            var mydivMock = document.getElementsByClassName('my-div')[0]
            appendDiv.func(mydivMock, '80%')

            setTimeout(() => {
                expect(mydivMock.innerHTML).
                    toEqual('<div style="width: 80%; float: left;"></div>')
                done()
            }, 4000)
        })
})