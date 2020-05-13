describe("button specification", () => {
    const $ = require('jquery');
    let jsdom = require('jsdom').JSDOM,
        uri = 'app.html'

    it('button is added to DOM', () => {
        var importedButton = require('../js/button').innerHTML

        jsdom.fromFile(uri).then(function (dom) {

            let window = dom.window,
                document = window.document;

            var documentButton = document.querySelectorAll('button')[0].innerHTML;

        }).catch (function (e) {

            console.log(e);

        }).then(
            expect(documentButton).toEqual(importedButton)
        );
    })

    /*it('console.log greeting', () => {
        console.log = jest.fn();
        require("../js/printer.js");

        expect(console.log).toHaveBeenCalledWith('siemanko w pliku printer.js');
    });*/
});