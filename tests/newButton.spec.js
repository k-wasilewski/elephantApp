require("core-js/stable")
require("regenerator-runtime/runtime")

describe("button specification", () => {
    it('new button is appended to DOM after click on old button',
        (done) => {

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
                require('../js/oldButtonFunc').func(mockOldButton)
            }

            mockOldButton.click()

            setTimeout(() => {
                expect(document.getElementById('newButton').innerHTML).
                    toEqual('appended button')
                done()
            }, 4000)
        })
})