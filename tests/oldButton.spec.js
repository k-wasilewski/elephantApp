require("core-js/stable")
require("regenerator-runtime/runtime")

describe("button specification", () => {
    it('old button is appended to DOM',
        async (done) => {

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

            var oldButton = await require('../js/oldButton')
            //console.log(document.body.innerHTML)
            done()


        })
})