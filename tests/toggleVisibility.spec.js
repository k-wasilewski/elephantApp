require("core-js/stable")
require("regenerator-runtime/runtime")

describe("toggleVisibility function specification", () => {
    it('display of passed element is toggled if it is not the tab div',
        (done) => {

            document.body.innerHTML =
                '<div class="my-div1"></div>' +
                '<div class="my-div2 hidden"></div>'

            var toggleVisibility = require('../js/func/toggleVisibility')

            var mydiv1Mock = document.getElementsByClassName('my-div1')[0]
            var mydiv2Mock = document.getElementsByClassName('my-div2')[0]
            toggleVisibility.func(mydiv1Mock)
            toggleVisibility.func(mydiv2Mock)

            setTimeout(() => {
                expect(mydiv1Mock.classList).toContain('hidden')
                expect(mydiv2Mock.classList[0]).toEqual('my-div2')
                done()
            }, 4000)
        })

    it('only 1 element with a main class is displayed, the one passed as ' +
        'argument, if it is the tab div',
        (done) => {

            document.body.innerHTML =
                '<div id="mainDiv">' +
                    '<div class="my-div1 main"></div>' +
                    '<div class="my-div2 main hidden"></div>' +
                    '<div class="my-div3 main hidden"></div>' +
                '</div>'

            var toggleVisibility = require('../js/func/toggleVisibility')

            var mydiv1Mock = document.getElementsByClassName('my-div1')[0]
            var mydiv2Mock = document.getElementsByClassName('my-div2')[0]
            var mydiv3Mock = document.getElementsByClassName('my-div3')[0]
            toggleVisibility.func(mydiv2Mock)
            toggleVisibility.func(mydiv3Mock)

            setTimeout(() => {
                expect(mydiv1Mock.classList).toContain('hidden')
                expect(mydiv2Mock.classList).toContain('hidden')
                expect(mydiv3Mock.classList[0]).toEqual('my-div3')
                expect(mydiv3Mock.classList[2]).toBeUndefined()
                done()
            }, 4000)
        })
})