require("core-js/stable")
require("regenerator-runtime/runtime")

describe("button specification", () => {
    it('old button changes inner text after click',
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
            var myButton

            mockOldButton.onclick = function () {
                var myFunction = require('../js/oldButtonFunc').func
                myButton = myFunction(mockOldButton)
            }

            mockOldButton.click()

            setTimeout(() => {
                expect(myButton.innerHTML).toEqual("new button was appended")
                done()
            }, 4000)
        })
})