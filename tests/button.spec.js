//require("babel-core/register");
//require("babel-polyfill");

describe("button specification", () => {
    it('button is added to DOM', () => {

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
            console.log("myFunction: "+myFunction)  //here it is interesting output...
            myButton = myFunction(mockOldButton)
            console.log("after require: "+myButton.innerHTML)     //why is it 'undefined' ???

            import('../js/oldButtonFunc').then(function (module) {
                //myButton = module.func(mockOldButton)
                console.log("after import: "+myButton.innerHTML)   //WORKS only after delay !!!
            })
        }

        mockOldButton.click()

        //expect(myButton.innerHTML).toEqual("new button was appended")
    })
})