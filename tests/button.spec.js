require("core-js/stable")
require("regenerator-runtime/runtime")

describe("button specification", () => {
    it('new button is appended to DOM after click on old button',
        async (done) => {

        document.body.innerHTML =
            '<span>siemanko</span>' +
            '<div class="my-div">' +
                '<div>' +
                    'some content' +
                '</div>' +
                '<button id="oldButton">' +
                    'lazily append new button' +
                '</button>'
            '</div>' +
            '<div class="img-wrapper">' +
                '<img id="img" />' +
            '</div>';

        var mockOldButton = document.getElementById('oldButton')

        mockOldButton.onclick = function () {
            var myFunction = require('../js/oldButtonFunc').func
            myFunction(mockOldButton)
        }

        await mockOldButton.click()
        done()

        expect(myButton.innerHTML).toEqual("new button was appended")
    })
})