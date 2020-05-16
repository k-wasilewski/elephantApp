require("core-js/stable")
require("regenerator-runtime/runtime")

describe("button specification", () => {
    it('old button is appended to DOM',
        (done) => {

            document.body.innerHTML =
                '<span>siemanko</span>' +
                '<div class="my-div">' +
                    '<div>' +
                        'some content' +
                    '</div>' +
                '</div>' +
                '<div class="img-wrapper">' +
                    '<img id="img" />' +
                '</div>';

            var oldButton = require('../js/oldButton')

            var mydivMock = document.getElementsByClassName('my-div')[0];
            mydivMock.appendChild(oldButton);

            setTimeout(() => {
                expect(document.getElementById('oldButton').innerHTML).
                    toEqual('lazily append new button')
                done()
            }, 4000)
        })
})