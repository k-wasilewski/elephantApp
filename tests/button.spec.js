describe("button specification", () => {
    it('button is added to DOM', () => {

        const $ = require('jquery');

        document.body.innerHTML =
            '<span>siemanko</span>' +
            '<div class="my-div">' +
                '<div>' +
                    'some content' +
                '</div>' +
                '<button id="oldButton" onclick="this.style.backgroundColor="red">' +
                    'lazily append new button' +
            '</button>'
            '</div>' +
            '<div class="img-wrapper">' +
                '<img id="img" />' +
            '</div>';

        console.log($('#oldButton'))
    })
})