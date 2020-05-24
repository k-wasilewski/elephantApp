require("core-js/stable")
require("regenerator-runtime/runtime")

describe("App specification", () => {
    it('a header is created and prepended to root div',
        (done) => {

            document.body.innerHTML =
                '<div id="root"/>'

            function fakeDOMLoaded() {
                require('../js/app')
                const fakeEvent = document.createEvent('Event')
                fakeEvent.initEvent('DOMContentLoaded', true, true)
                document.dispatchEvent(fakeEvent)
            }
            fakeDOMLoaded();

            const root = document.getElementById('root')

            setTimeout(() => {
                expect(root.parentElement.children[0].outerHTML).toContain('<header>')
                done()
            }, 4000)
        })

    it('menu div is created and appended to header',
        (done) => {

            document.body.innerHTML =
                '<div id="root"/>'

            function fakeDOMLoaded() {
                require('../js/app')
                const fakeEvent = document.createEvent('Event')
                fakeEvent.initEvent('DOMContentLoaded', true, true)
                document.dispatchEvent(fakeEvent)
            }
            fakeDOMLoaded();

            const header = document.getElementsByTagName('header')[0]

            setTimeout(() => {
                expect(header.children[0].outerHTML).toContain('id="menu"')
                done()
            }, 4000)
        })

    it('menuBtn icon is created and appended to menu',
        (done) => {

            document.body.innerHTML =
                '<div id="root"/>'

            function fakeDOMLoaded() {
                require('../js/app')
                const fakeEvent = document.createEvent('Event')
                fakeEvent.initEvent('DOMContentLoaded', true, true)
                document.dispatchEvent(fakeEvent)
            }
            fakeDOMLoaded();

            const menu = document.getElementById('menu')

            setTimeout(() => {
                expect(menu.children[1].outerHTML).toContain('<img')
                done()
            }, 4000)
        })

    it('a main div is created and appepended to root div',
        (done) => {

            document.body.innerHTML =
                '<div id="root"/>'

            function fakeDOMLoaded() {
                require('../js/app')
                const fakeEvent = document.createEvent('Event')
                fakeEvent.initEvent('DOMContentLoaded', true, true)
                document.dispatchEvent(fakeEvent)
            }
            fakeDOMLoaded();

            const root = document.getElementById('root')

            setTimeout(() => {
                expect(root.children[1].outerHTML).toContain('id="mainDiv"')
                done()
            }, 4000)
        })
})