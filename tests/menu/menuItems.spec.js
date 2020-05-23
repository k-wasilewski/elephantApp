require("core-js/stable")
require("regenerator-runtime/runtime")

describe("menuItems specification", () => {
    it('a new menuItems div with several menuItem spans appended is created',
        (done) => {

            document.body.innerHTML =
                '<div id="root">' +
                '<div id="menu"></div> ' +
                '<div id="mainDiv"></div>' +
                '</div>'

            var menuItems = require('../../js/menu/menuItems').menuItems()
            var menu = document.getElementById('menu')
            menu.appendChild(menuItems)

            setTimeout(() => {
                expect(menuItems.innerHTML).toContain('<span class="menuItem">')
                done()
            }, 4000)
        })

    it('menuItems div has several span children with correct innerTexts',
        (done) => {

            document.body.innerHTML =
                '<div id="root">' +
                    '<div id="menu"></div> ' +
                    '<div id="mainDiv"></div>' +
                '</div>'

            var menuItems = require('../../js/menu/menuItems').menuItems()
            var menu = document.getElementById('menu')
            menu.appendChild(menuItems)

            setTimeout(() => {
                expect(menuItems.children[0].innerText).toContain('Home')
                expect(menuItems.children[1].innerText).toContain('First elephant')
                expect(menuItems.children[2].innerText).toContain('Second elephant')
                expect(menuItems.children[3].innerText).toContain('Contact')
                done()
            }, 4000)
        })

    it('click on Home menuItem span displays corresponding main div correctly',
        (done) => {

            document.body.innerHTML =
                '<div id="root">' +
                    '<div id="menu"></div> ' +
                    '<div id="mainDiv"></div>' +
                '</div>'

            var menuItems = require('../../js/menu/menuItems').menuItems()

            async function getContentArr() {
                return await import('../../js/menu/menuItems').then(async function (module) {
                    return await module.contentArr()
                })
            }

            var homeMenuItem = menuItems.children[0]

            getContentArr().then(function (result) {
                let mainDivHome = result[0].children[0]
                expect(mainDivHome.classList[1]).toBeUndefined()

                homeMenuItem.click()
            })

            setTimeout(() => {
                getContentArr().then(function (result) {
                    let mainDivHome = result[0].children[0]
                    expect(mainDivHome.classList[1]).toContain('hidden')
                    done()
                })
            }, 4000)
        })

    it('click on First elephant menuItem span displays corresponding main div correctly',
        (done) => {

            document.body.innerHTML =
                '<div id="root">' +
                '<div id="menu"></div> ' +
                '<div id="mainDiv"></div>' +
                '</div>'

            var menuItems = require('../../js/menu/menuItems').menuItems()

            async function getContentArr() {
                return await import('../../js/menu/menuItems').then(async function (module) {
                    return await module.contentArr()
                })
            }

            var elephant1MenuItem = menuItems.children[1]

            getContentArr().then(function (result) {
                let mainDivElephant1 = result[0].children[1]
                expect(mainDivElephant1.classList[1]).toContain('hidden')

                elephant1MenuItem.click()
            })

            setTimeout(() => {
                getContentArr().then(function (result) {
                    let mainDivElephant1 = result[0].children[1]
                    expect(mainDivElephant1.classList[1]).toBeUndefined()
                    done()
                })
            }, 4000)
        })

    it('click on Second elephant menuItem span displays corresponding main div correctly',
        (done) => {

            document.body.innerHTML =
                '<div id="root">' +
                '<div id="menu"></div> ' +
                '<div id="mainDiv"></div>' +
                '</div>'

            var menuItems = require('../../js/menu/menuItems').menuItems()

            async function getContentArr() {
                return await import('../../js/menu/menuItems').then(async function (module) {
                    return await module.contentArr()
                })
            }

            var elephant2MenuItem = menuItems.children[2]

            getContentArr().then(function (result) {
                let mainDivElephant2 = result[0].children[2]
                expect(mainDivElephant2.classList[1]).toContain('hidden')

                elephant2MenuItem.click()
            })

            setTimeout(() => {
                getContentArr().then(function (result) {
                    let mainDivElephant2 = result[0].children[2]
                    expect(mainDivElephant2.classList[1]).toBeUndefined()
                    done()
                })
            }, 4000)
        })

    it('click on Contact menuItem span displays corresponding main div correctly',
        (done) => {

            document.body.innerHTML =
                '<div id="root">' +
                '<div id="menu"></div> ' +
                '<div id="mainDiv"></div>' +
                '</div>'

            var menuItems = require('../../js/menu/menuItems').menuItems()

            async function getContentArr() {
                return await import('../../js/menu/menuItems').then(async function (module) {
                    return await module.contentArr()
                })
            }

            var contactMenuItem = menuItems.children[3]

            getContentArr().then(function (result) {
                let mainDivContact = result[0].children[3]
                expect(mainDivContact.classList[1]).toContain('hidden')

                contactMenuItem.click()
            })

            setTimeout(() => {
                getContentArr().then(function (result) {
                    let mainDivContact = result[0].children[3]
                    expect(mainDivContact.classList[1]).toBeUndefined()
                    done()
                })
            }, 4000)
        })
})